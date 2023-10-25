from rest_framework.serializers import ModelSerializer

from .models import Reservation
from UserApp.serializers import UserSerializer
from RestaurantApp.serializers import RestaurantSerializer

class ReservationSerializer(ModelSerializer):
    user = UserSerializer(read_only = True)
    restaurant = RestaurantSerializer(read_only = True)
    
    class Meta:
        model = Reservation
        fields = (
            'id',
            'start_time',
            'reservation_state',
            'number_of_people',
            'user',
            'restaurant'
        )
