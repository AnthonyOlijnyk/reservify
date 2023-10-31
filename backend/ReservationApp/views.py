from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView

from django.utils import timezone

from UserApp.models import User
from RestaurantApp.models import Restaurant

from .forms import MakeReservationForm
from .serializers import ReservationSerializer
from .models import Reservation

from datetime import datetime, timedelta

from pytz import UTC

MAX_CAPACITY = 30

def make_success_response():
    return Response({
        'success': True,
        'message': 'Reservation was made successfully'
    }, status=status.HTTP_201_CREATED)

def make_error_response(errors):
    return Response({
        'success': False,
        'message': 'Reservation failed. Please correct the following errors:',
        'errors': errors
    }, status=status.HTTP_400_BAD_REQUEST)

def get_date_boundaries(start_time):
    structured_time = structure_time(start_time)

    start_of_day = structured_time - timedelta(hours=structured_time.hour, minutes=structured_time.minute)
    end_of_day = start_of_day + timedelta(hours=23, minutes=59)

    return [start_of_day, end_of_day]

def get_reservations(start_of_day, end_of_day, restaurant):
    return Reservation.objects.filter(
        restaurant=restaurant, 
        start_time__range=[
            start_of_day, 
            end_of_day
        ]
    )

def get_available_seats(reservations):
    open_seats = MAX_CAPACITY
    
    for reservation in reservations:
        open_seats -= reservation.number_of_people

    return open_seats

def is_seating_available(start_time, number_of_people, restaurant):
    start_of_day, end_of_day = get_date_boundaries(start_time)

    reservations = get_reservations(start_of_day, end_of_day, restaurant)

    available_seats = get_available_seats(reservations)
    
    return available_seats >= number_of_people

def get_models(user_id, restaurant_id):
    return [
        User.objects.get(pk=user_id), 
        Restaurant.objects.get(pk=restaurant_id)
    ]

def create_reservation(start_time, number_of_people, user, restaurant):
    Reservation.objects.create(
        start_time=structure_time(start_time),
        user=user,
        restaurant=restaurant,
        number_of_people=number_of_people
    )
    
def extract_data_from_request(data):
    return [
            data['start_time'], 
            data['number_of_people'],
            data['user_id'],
            data['restaurant_id']
    ]

def structure_time(time):
    return timezone.make_aware(datetime.strptime(time, '%Y-%m-%d %H:%M'), UTC, True)

def is_future_time(start_time):
    return structure_time(start_time) >= timezone.make_aware(datetime.now(), UTC, True)

class MakeReservationView(APIView):

    def post(self, request):
        form = MakeReservationForm(request.data)

        if not form.is_valid(): 
            return make_error_response(form.errors)

        serializer = ReservationSerializer(data=form.cleaned_data)

        if not serializer.is_valid(): 
            return make_error_response(serializer.errors)

        start_time, number_of_people, user_id, restaurant_id = extract_data_from_request(request.data)

        if not is_future_time(start_time):
            return make_error_response('The \"start_time\" field should be a future time.')

        user, restaurant = get_models(user_id, restaurant_id)

        if not is_seating_available(start_time, number_of_people, restaurant):
            return make_error_response(f'The capacity for the restaurant \"{restaurant.name}\" would be above the limit during that time')

        create_reservation(start_time, number_of_people, user, restaurant)

        return make_success_response()