from django.db import models

class Restaurant(models.Model):
    name = models.CharField(max_length=255)
    country = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    address = models.CharField(max_length=255)
    longitude = models.DecimalField(max_digits=15, decimal_places=10)
    latitude = models.DecimalField(max_digits=15, decimal_places=10)
    cuisines = models.CharField(max_length=255)
    average_cost_for_two = models.IntegerField()
    average_review_rating = models.DecimalField(max_digits=2, decimal_places=1)
    review_level_color = models.CharField(max_length=20)
    review_level_text = models.CharField(max_length=20)
    number_of_reviews = models.IntegerField()
    about = models.CharField(max_length=255, default='This restaurant is good :^)')
