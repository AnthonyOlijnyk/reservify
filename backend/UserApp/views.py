from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response

from django.template.response import TemplateResponse

from .models import User
from .serializers import UserSerializer
from .forms import SignupForm

import jwt, datetime, os

class SignUpView(APIView):

    def post(self, request):
        form = SignupForm(request.data)
        if form.is_valid():
            serializer = UserSerializer(data=form.cleaned_data)
            if serializer.is_valid():
                serializer.save()
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
        token = request.COOKIES.get('jwt')

        response = Response()

        if not token:
            response.data = { 'success': False, 'error': 'Unauthorized action.' }
            return response

        try:
            payload = jwt.decode(token, os.environ.get('JWT_SECRET_KEY'), algorithms=['HS256'])
        except jwt.ExpiredSignatureError:
            response.data = { 'success': False, 'error': 'The current session has expired.' }
            return response
        
        user = User.objects.filter(id=payload['id']).first()
        
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
    def put(self, request, username):
        try:
            user = User.objects.get(username=username)
        except User.DoesNotExist:
            return Response(
                {'error': 'User not found'},
                status=status.HTTP_404_NOT_FOUND
            )

        new_username = request.data.get('new_username', None)

        if new_username is None:
            return Response(
                {'error': 'New username is required in the request body'},
                status=status.HTTP_400_BAD_REQUEST
            )

        user.username = new_username
        user.save()

        serializer = UserSerializer(user)  # Replace with your actual serializer
        return Response(serializer.data, status=status.HTTP_200_OK)    
    


class UserUpdatePasswordView(APIView):
    def put(self, request, username):
        try:
            user = User.objects.get(username=username)
        except User.DoesNotExist:
            return Response(
                {'error': 'User not found'},
                status=status.HTTP_404_NOT_FOUND
            )

        # Get the new password from the request data
        new_password = request.data.get('new_password', None)

        if not new_password:
            return Response(
                {'error': 'New password is required in the request body'},
                status=status.HTTP_400_BAD_REQUEST
            )

        # Update password
        user.set_password(new_password)
        user.save()

        serializer = UserSerializer(user)

        response_data = {
            "id": user.id,
            "username": user.username,
            "name": user.name,
            "email": user.email,
            "phone_number": user.phone_number,
            "new_password": new_password  # Include the new password in payload
        }
        return Response(response_data, status=status.HTTP_200_OK)