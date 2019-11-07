from django.shortcuts import render
from videos.models import Media
from videos.serializers import MediaSerializer
from rest_framework import generics
from members.models import Current
from members.serializers import CurrentSerializer

import json

def react_app(request):
    members = [CurrentSerializer(m).data for m in Current.objects.all()]
    context = { 'members': json.dumps(members) }
    return render(request, 'index.html', context)

class MediaListCreate(generics.ListCreateAPIView):
    '''
    Generic API views for the current members models
    '''
    queryset = Media.objects.all()
    serializer_class = MediaSerializer
