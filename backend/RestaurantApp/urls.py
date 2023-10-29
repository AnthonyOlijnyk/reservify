from django.contrib import admin
from django.urls import path, include
from django.urls import path
from .views import RestaurantSearchView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('search/', RestaurantSearchView.as_view(), name='restaurant-search'),

]