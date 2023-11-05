from django.core.mail import send_mail
from django.conf import settings

def send_email_confirmation(email):
    send_mail(
        'Welcome to Reservify!',
        'Thank you for making an account with Reservify.',
        settings.EMAIL_HOST_USER,
        [email],
        fail_silently=False
    )