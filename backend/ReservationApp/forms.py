from django import forms
from django.core.validators import MaxValueValidator, MinValueValidator

class MakeReservationForm(forms.Form):
    start_time = forms.DateTimeField()
    number_of_people = forms.IntegerField(
        validators=[MaxValueValidator(30), MinValueValidator(1)]
    )
    restaurant_name = forms.CharField(max_length=255)

class UpdateReservationStateForm(forms.Form):
    new_state = forms.ChoiceField(choices=[('Upcoming', 'Upcoming'), ('Ongoing', 'Ongoing'), ('Finished', 'Finished'), ('Canceled', 'Canceled')])