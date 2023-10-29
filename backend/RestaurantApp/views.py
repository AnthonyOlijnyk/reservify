from rest_framework import generics
from .models import Restaurant
from .serializers import RestaurantSerializer

class RestaurantSearchView(generics.ListAPIView):
    serializer_class = RestaurantSerializer

    def get_queryset(self):
        query = self.request.query_params.get('name', '')
        return Restaurant.objects.filter(name__icontains=query)
