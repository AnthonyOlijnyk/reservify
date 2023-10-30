from django.contrib import admin
from django.urls import path
from .views import MakeReservationView

urlpatterns = [
    path('api/reservation', MakeReservationView.as_view())
]
