from django.shortcuts import render
from events.models import Event
from events.serializers import EventSerializer
from rest_framework import generics

class EventListCreate(generics.ListCreateAPIView):
    '''
    Generic API views for the Event models
    '''
    queryset = Event.objects.all()
    serializer_class = EventSerializer

