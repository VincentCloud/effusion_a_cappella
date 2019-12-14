from django.shortcuts import render
from events.models import NewsPost
from events.serializers import NewsPostSerializer
from rest_framework import generics

class NewsPostListCreate(generics.ListCreateAPIView):
    '''
    Generic API views for the Event models
    '''
    queryset = NewsPost.objects.all()
    serializer_class = NewsPostSerializer

