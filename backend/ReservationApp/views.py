from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView

from django.shortcuts import render

from UserApp.models import User
from RestaurantApp.models import Restaurant

from .forms import MakeReservationForm
from .serializers import ReservationSerializer
from .models import Reservation

import datetime

class MakeReservationView(APIView):

    def is_restaurant_full(self, restaurant, number_of_people):
        reservations = Reservation.objects.filter()

    def post(self, request):
        form = MakeReservationForm(request.data)
        if form.is_valid():
            serializer = ReservationSerializer(data=form.cleaned_data)
            if serializer.is_valid():
                start_time = request.data['start_time']
                user_id = request.data['user_id']
                restaurant_id = request.data['restaurant_id']
                nSumber_of_people = request.data['number_of_people']

                if datetime.datetime.strptime(start_time, '%Y-%m-%d %H:%M') < datetime.datetime.now():
                    return Response({
                    'success': False,
                    'message': 'Reservation failed. Please correct the following errors:',
                    'errors': 'The \"start_time\" field should be a future time.'
                }, status=status.HTTP_400_BAD_REQUEST)

                user = User.objects.filter(id=user_id).first()
                restaurant = Restaurant.objects.filter(id=restaurant_id).first()

                if self.is_restaurant_full(restaurant, number_of_people):
                    return Response({
                    'success': False,
                    'message': 'Reservation failed. Please correct the following errors:',
                    'errors': f'The capacity for the restaurant \"{restaurant.name}\" would be above the limit during that time'
                }, status=status.HTTP_400_BAD_REQUEST)


                Reservation.objects.create(
                    start_time=start_time,
                    user=user,
                    restaurant=restaurant,
                    number_of_people=number_of_people
                )
                return Response({
                    'success': True,
                    'message': 'Reservation was made successfully'
                }, status=status.HTTP_201_CREATED)
            else:
                return Response({
                    'success': False,
                    'message': 'Reservation failed. Please correct the following errors:',
                    'errors': serializer.errors
                }, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response({
                'success': False,
                'message': 'Invalid form data. Please correct the following errors:',
                'errors': form.errors
            }, status=status.HTTP_400_BAD_REQUEST)