# Generated by Django 4.2.5 on 2023-10-11 02:18

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Restaurant',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('country', models.CharField(max_length=255)),
                ('city', models.CharField(max_length=255)),
                ('address', models.CharField(max_length=255)),
                ('longitude', models.DecimalField(decimal_places=10, max_digits=15)),
                ('latitude', models.DecimalField(decimal_places=10, max_digits=15)),
                ('cuisines', models.CharField(max_length=255)),
                ('average_cost_for_two', models.IntegerField()),
                ('average_review_rating', models.DecimalField(decimal_places=1, max_digits=2)),
                ('review_level_color', models.CharField(max_length=20)),
                ('review_level_text', models.CharField(max_length=20)),
                ('number_of_reviews', models.IntegerField()),
            ],
        ),
    ]
