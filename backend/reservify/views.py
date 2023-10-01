from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response

from django.shortcuts import render
from django.template.response import TemplateResponse



from .models import User
from .serializers import UserSerializer
from .forms import SignupForm

import jwt, datetime, os


class SignUpView(APIView):
    template_name = 'signup.html'

    def get(self, request):
        return TemplateResponse(request, self.template_name, context={})

    def post(self, request):
        form = SignupForm(request.data)
        if form.is_valid():
            # Form data is valid, process it and return a response
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

        user = User.objects.filter(email=email).first()
        
        if user is None:
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

        response.data = { 'success': True }
        response.set_cookie(key='jwt', value=token, httponly=True)

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

        user = User.objects.filter(id=id).first()

        if not user:
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