# Generated by Django 4.2.5 on 2023-11-09 21:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('RestaurantApp', 'backfill_about_for_restaurant'),
    ]

    operations = [
        migrations.AddField(
            model_name='restaurant',
            name='imageNum',
            field=models.CharField(default='default', max_length=20),
        ),
    ]
