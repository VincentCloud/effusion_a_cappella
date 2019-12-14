# from django.shortcuts import render
from videos.models import MediaPhoto, MediaVideo
from videos.serializers import MediaPhotoSerializer, MediaVideoSerializer
from rest_framework import generics

import json

class MediaPhotoListCreate(generics.ListCreateAPIView):
    '''
    Generic API views for the current media photo models
    '''
    queryset = MediaPhoto.objects.all()
    serializer_class = MediaPhotoSerializer

class MediaVideoListCreate(generics.ListCreateAPIView):
    '''
    Generic API views for the current media video models
    '''
    queryset = MediaVideo.objects.all()
    serializer_class = MediaVideoSerializer
