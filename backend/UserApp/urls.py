"""
URL configuration for UserApp project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from .views import UserView, SignUpView, LoginView, LogoutView, RootView, UserUpdateUsernameView, UserUpdatePasswordView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', RootView.as_view()),
    path('api/signup', SignUpView.as_view(), name='singup'),
    path('api/login', LoginView.as_view(), name='login'),
    path('api/logout', LogoutView.as_view()),
    path('api/users', UserView.as_view()),
    path('api/users/update/username/', UserUpdateUsernameView.as_view(), name='update-username'),
    path('api/users/update/password/', UserUpdatePasswordView.as_view(), name='update-password'),
    path('RestaurantApp/', include('RestaurantApp.urls')),
    path('ReservationApp/', include('ReservationApp.urls'))
]
