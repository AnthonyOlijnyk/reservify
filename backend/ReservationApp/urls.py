from django.contrib import admin
from django.urls import path
from .views import MakeReservationView, FetchReservationsView

urlpatterns = [
    path('api/make-reservation', MakeReservationView.as_view()),
    path('api/fetch-reservations', FetchReservationsView.as_view(), name='fetch_reservations'),
]
