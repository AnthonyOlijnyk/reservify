from rest_framework.serializers import ModelSerializer

from .models import Restaurant

class RestaurantSerializer(ModelSerializer):
    class Meta:
        model = Restaurant
        fields = (
            'id',
            'name',
            'country',
            'city',
            'address',
            'longitude',
            'latitude',
            'cuisines',
            'average_cost_for_two',
            'average_review_rating',
            'review_level_color',
            'review_level_text',
            'number_of_reviews'
        )
