from rest_framework.views import APIView

from rest_framework.response import Response
from rest_framework import status

from django.http import JsonResponse

from core.utils.authorization import check_user_authorized, get_user_id
from core.utils.network import make_error_response, make_success_response

from .utils.make_reservation import (
    extract_data_from_request,
    is_future_time,
    get_models,
    is_seating_available,
    is_user_free,
    create_reservation,
    send_confirmation_email
)

from .constants import (
    TIME_IN_PAST_ERROR, 
    OVER_CAPACITY_ERROR, 
    USER_ALREADY_BOOKED_ERROR
)

from .models import Reservation
from .forms import MakeReservationForm
from .serializers import ReservationSerializer

from .forms import MakeReservationForm
from .serializers import ReservationSerializer

class MakeReservationView(APIView):

    def post(self, request):
        authorization_error = check_user_authorized(request)

        if authorization_error:
            return authorization_error
        
        form = MakeReservationForm(request.data)

        if not form.is_valid(): 
            return make_error_response(form.errors)

        serializer = ReservationSerializer(data=form.cleaned_data)

        if not serializer.is_valid(): 
            return make_error_response(serializer.errors)

        user_id,  restaurant_name, start_time, number_of_people = extract_data_from_request(request)

        if not is_future_time(start_time):
            return make_error_response(TIME_IN_PAST_ERROR)

        user, restaurant = get_models(user_id, restaurant_name)

        if not is_user_free(start_time, user_id):
            return make_error_response(USER_ALREADY_BOOKED_ERROR)

        if not is_seating_available(start_time, number_of_people, restaurant):
            return make_error_response(OVER_CAPACITY_ERROR)

        create_reservation(start_time, number_of_people, user, restaurant)

        send_confirmation_email(start_time, user.email, restaurant)

        return make_success_response()


class ReservationUpdateStateView(APIView):
    def put(self, request):
        try:
            reservation_id = request.data['reservation_id']
            new_state = request.data['new_state']
        except KeyError as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)

        try:
            reservation = Reservation.objects.get(id=reservation_id)
        except Reservation.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        # Update the reservation state
        reservation.reservation_state = new_state
        reservation.save()

        return Response(status=status.HTTP_200_OK)    

class FetchReservationsView(APIView):
    def get(self, request):
        authorization_error = check_user_authorized(request)

        if authorization_error:
            return authorization_error

        user_id = get_user_id(request)

        reservations = Reservation.objects.filter(user_id=user_id)
        serializer = ReservationSerializer(reservations, many=True)
        
        return JsonResponse(serializer.data, safe=False)

