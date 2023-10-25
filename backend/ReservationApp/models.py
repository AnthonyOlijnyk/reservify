from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator

class Reservation(models.Model):

    class ReservationState(models.TextChoices):
        UPCOMING = 'Upcoming'
        ONGOING = 'Ongoing'
        FINISHED = 'Finished'
        CANCELED = 'Canceled'

    start_time = models.DateTimeField()

    reservation_state = models.CharField(
        max_length=8,
        choices=ReservationState.choices, 
        default=ReservationState.UPCOMING
    )

    number_of_people = models.IntegerField(
        default=1,
        validators=[MaxValueValidator(30), MinValueValidator(1)]
    )
    
    user = models.ForeignKey('UserApp.User', on_delete=models.CASCADE)
    restaurant = models.ForeignKey('RestaurantApp.Restaurant', on_delete=models.CASCADE)

