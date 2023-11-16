from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response

from django.template.response import TemplateResponse

from .models import User
from .serializers import UserSerializer
from .forms import SignupForm

from django.contrib.auth import authenticate
from django.contrib.auth.hashers import check_password

from .utils.signup import send_email_confirmation
from core.utils.authorization import check_user_authorized, get_user_id

import jwt, datetime, os

class SignUpView(APIView):

    def post(self, request):
        form = SignupForm(request.data)
        if form.is_valid():
            serializer = UserSerializer(data=form.cleaned_data)
            if serializer.is_valid():
                serializer.save()
                send_email_confirmation(request.data['email'])
                return Response({
                    'success': True,
                    'message': 'Registration successful. Welcome to our platform!'
                }, status=status.HTTP_201_CREATED)
            else:
                return Response({
                    'success': False,
                    'message': 'Registration failed. Please correct the following errors:',
                    'errors': serializer.errors
                }, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response({
                'success': False,
                'message': 'Invalid form data. Please correct the following errors:',
                'errors': form.errors
            }, status=status.HTTP_400_BAD_REQUEST)
 
    
class LoginView(APIView):
    def post(self, request):
        email = request.data['email']
        password = request.data['password']
        
        response = Response()

        try:
            user = User.objects.get(email=email)

        except User.DoesNotExist:
            response.data = { 'success': False, 'error': 'There are no users with the specified email.' }
            return response
        
        if not user.check_password(password):
            response.data = { 'success': False, 'error': 'The username and password you specified are invalid. Please try again.' }
            return response
        
        payload = {
            'id': user.id,
            'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=60),
            'iat': datetime.datetime.utcnow()
        }

        token = jwt.encode(payload, os.environ.get('JWT_SECRET_KEY'), algorithm='HS256')

        response.data = { 'success': True, 'token': token }

        return response
    
class UserView(APIView):
    def get(self, request):
        authorization_errors = check_user_authorized(request)

        if authorization_errors:
            return authorization_errors
        
        response = Response()
        
        user = User.objects.get(pk=get_user_id(request))
        
        serializer = UserSerializer(user)
        response.data = serializer.data | { 'success': True }

        return response
    
    def delete(self, request):
        id = request.query_params['id']

        response = Response()

        if not id:
            response.data = { 'success': False, 'error': 'The id of the user to delete was not specified.' }
            return response
        
        try:
            user = User.objects.get(pk=id)
        except User.DoesNotExist:
            response.data = { 'success': False, 'error': f"There is no user with an id of \'{id}\'" }
            return response
        
        user.delete()

        response.data = {
            'success': True,
            'message': f"user with id \'{id}\' successfully deleted."
        }

        return response
    
class LogoutView(APIView):
    def post(self, request):
        response = Response()
        response.delete_cookie('jwt')
        response.data = { 'success': True }
        return response
    
class RootView(APIView):    
    template_name = 'root.html'

    def get(self, request):
        return TemplateResponse(request, self.template_name, context={})

class UserUpdateUsernameView(APIView):
    def put(self, request):
        user_id = get_user_id(request)
        new_username = request.data.get('new_username', None)
        old_username = request.data.get('old_username', None)
        
        try:
            user = User.objects.get(id=user_id)
        except User.DoesNotExist:
                return Response({
                'success': False,
                'message': 'User not found.'
                }, status=status.HTTP_404_NOT_FOUND)

        # Ensure new and old username in body
        if new_username is None or old_username is None:
                return Response({
                'success': False,
                'message': 'New and old username must be in the request body'
                }, status=status.HTTP_400_BAD_REQUEST)

        # Check if the user making the request matches the old_username provided
        if user.username != old_username:
                return Response({
                'success': False,
                'message': 'You cannot change the username of another user'
                }, status=status.HTTP_403_FORBIDDEN)
    
        # Check if the new username is different from the current one
        if new_username == user.username:
                return Response({
                'success': False,
                'message': 'New username should be different from current username'
                }, status=status.HTTP_400_BAD_REQUEST)
        
        user.username = new_username
        user.save()

        return Response({
                'success': True,
                'message': 'Username changed successfully'
                }, status=status.HTTP_200_OK)
 
class UserUpdatePasswordView(APIView):
    def put(self, request):
        user_id = get_user_id(request)
        old_password = request.data.get('old_password', None)
        new_password = request.data.get('new_password', None)

        # Find user
        try:
            user = User.objects.get(id=user_id)
        except User.DoesNotExist:
                return Response({
                'success': False,
                'message': 'User not found'
                }, status=status.HTTP_404_NOT_FOUND)
        
        # Ensure new and old password in request body
        if not new_password or not old_password:
                return Response({
                'success': False,
                'message': 'Both old and new passwords are required in the request body'
                }, status=status.HTTP_400_BAD_REQUEST)
        
        # Check if the current password is correct
        if not check_password(old_password, user.password):
                return Response({
                'success': False,
                'message': 'Current password is incorrect'
                }, status=status.HTTP_400_BAD_REQUEST)
        
        # Authenticate user with email and old password
        authenticated_user = authenticate(email=user.email, password=old_password)
        if not authenticated_user:
            return Response({
                'success': False,
                'message': 'User is unauthorized'
                }, status=status.HTTP_401_UNAUTHORIZED)

        # Update password
        user.set_password(new_password)
        user.save()
        
        return Response({
                'success': True,
                'message': 'Password changed successfully'
                }, status=status.HTTP_200_OK)