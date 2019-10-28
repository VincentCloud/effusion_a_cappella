from django.shortcuts import render
from members.models import Current, Alumni
from members.serializers import CurrentSerializer, AlumniSerializer
from rest_framework import generics

class CurrentListCreate(generics.ListCreateAPIView):
    '''
    Generic API views for the current members models
    '''
    queryset = Current.objects.all()
    serializer_class = CurrentSerializer

class AlumniListCreate(generics.ListCreateAPIView):
    '''
    Generic API views for the alumni models
    '''
    queryset = Alumni.objects.all()
    serializer_class = AlumniSerializer