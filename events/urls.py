from django.urls import path
from . import views

urlpatterns = [
    path('api/events/', views.EventListCreate.as_view(), name = 'events'),
]