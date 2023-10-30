from django.contrib import admin
from django.urls import path, include
from django.urls import path
from .views import  search

urlpatterns = [
    path('admin/', admin.site.urls),
    path('search/', search, name='search'),

]