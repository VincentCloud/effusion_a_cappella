from django.shortcuts import render
from videos.models import Media
from videos.serializers import MediaSerializer
from rest_framework import generics

class MediaListCreate(generics.ListCreateAPIView):
    '''
    Generic API views for the current members models
    '''
    queryset = Media.objects.all()
    serializer_class = MediaSerializer
