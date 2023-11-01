from django import forms
from django.core.validators import MaxValueValidator, MinValueValidator

class MakeReservationForm(forms.Form):
    start_time = forms.DateTimeField()
    number_of_people = forms.IntegerField(
        validators=[MaxValueValidator(30), MinValueValidator(1)]
    )
    email = forms.CharField(max_length=255)
    restaurant_id = forms.IntegerField()
