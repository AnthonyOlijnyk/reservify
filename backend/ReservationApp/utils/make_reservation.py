from django.core.mail import send_mail
from django.conf import settings
from django.utils import timezone

from UserApp.models import User
from RestaurantApp.models import Restaurant

from core.utils.authorization import get_user_id

from ..models import Reservation

from ..constants import MAX_CAPACITY

from datetime import datetime, timedelta

from pytz import UTC

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
        ],
        reservation_state__in=[
            'Upcoming',
            'Ongoing'
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

def get_models(user_id, restaurant_name):
    return [
        User.objects.get(pk=user_id), 
        Restaurant.objects.get(name=restaurant_name)
    ]

def create_reservation(start_time, number_of_people, user, restaurant):
    Reservation.objects.create(
        start_time=structure_time(start_time),
        user=user,
        restaurant=restaurant,
        number_of_people=number_of_people
    )
    
def extract_data_from_request(request):
    user_id = get_user_id(request)

    return [
            user_id,
            request.data['restaurant_name'],
            request.data['start_time'], 
            request.data['number_of_people']
    ]

def structure_time(time):
    return timezone.make_aware(datetime.strptime(time, '%Y-%m-%d %H:%M'), UTC, True)

def is_future_time(start_time):
    return structure_time(start_time) >= timezone.make_aware(datetime.now(), UTC, True)

def make_email_message(start_time, restaurant):
    return f'Your reservation at {restaurant.name} on {start_time} has been confirmed'

def send_confirmation_email(start_time, email, restaurant):
    send_mail(
        'Reservation Confirmed',
        make_email_message(start_time, restaurant),
        settings.EMAIL_HOST_USER,
        [email],
        fail_silently=False
    )