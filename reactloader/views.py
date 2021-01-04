from django.shortcuts import render
from rest_framework import generics

from events.models import NewsPost
from events.serializers import NewsPostSerializer
from members.models import Member
from members.serializers import MemberSerializer
from videos.models import MediaPhoto, MediaVideo
from videos.serializers import MediaPhotoSerializer, MediaVideoSerializer
from videos.youtubeclient import fetch_title
from .models import HomeImage
from .serializers import HomeImageSerializer

import json

def react_app(request):
    home_images = [HomeImageSerializer(h).data for h in HomeImage.objects.all()]
    members = [MemberSerializer(m).data for m in Member.objects.all()]
    news = [NewsPostSerializer(n).data for n in NewsPost.objects.order_by('-date')]
    photos = [MediaPhotoSerializer(m).data for m in MediaPhoto.objects.all()]
    videos = [MediaVideoSerializer(m).data for m in MediaVideo.objects.all()]

    # Hit the YouTube API every time someone visits the home page.
    # This is an ugly hack to make sure our API key doesn't expire.
    dummy_title = fetch_title('9dH6AMVuPzE') if request.path == '/' else '' # ID of "No Air"

    effusion_params = {
        'members': members,
        'media': videos + photos,
        'homeImages': home_images,
        'news': news,
        'dummy_title': dummy_title
    }
    context = { 'effusion_params': json.dumps(effusion_params) }
    return render(request, 'index.html', context)
