from django.contrib import admin
from django.urls import path
from .views import MakeReservationView, ReservationUpdateStateView

urlpatterns = [
    path('api/make-reservation', MakeReservationView.as_view()),
    path('api/reservations/update_state/', ReservationUpdateStateView.as_view()),

]
