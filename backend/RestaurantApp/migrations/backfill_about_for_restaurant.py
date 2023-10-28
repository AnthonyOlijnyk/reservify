# Generated by Django 4.2.5 on 2023-10-07 20:23

from django.db import migrations
import csv, random

def get_about_options():
    about_options = []
    with open ('RestaurantApp/migrations/data/restaurant_about.csv') as file_data:
        reader = csv.DictReader(file_data)
        for row in reader:
            about_options.append(row['About'])
    return about_options

def backfill_about(apps, schema_editor):
    Restaurant = apps.get_model('RestaurantApp', 'Restaurant')

    about_options = get_about_options()

    for restaurant in Restaurant.objects.all():
        restaurant.about = random.choice(about_options)
        restaurant.save()

    

class Migration(migrations.Migration):

    dependencies = [
        ('RestaurantApp', '0001_restaurant_about'),
    ]

    operations = [
        migrations.RunPython(backfill_about)
    ]