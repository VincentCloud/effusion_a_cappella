from django.shortcuts import render
from videos.models import Media
from videos.serializers import MediaSerializer
from rest_framework import generics
from .models import (
    Member,
    HomeImage,
    MediaPhoto,
    MediaVideo,
    NewsPost
)
from .serializers import (
    MemberSerializer,
    HomeImageSerializer,
    MediaPhotoSerializer,
    MediaVideoSerializer,
    NewsPostSerializer
)

import json

def react_app(request):
    home_images = [HomeImageSerializer(h).data for h in HomeImage.objects.all()]
    members = [MemberSerializer(m).data for m in Member.objects.all()]
    news = [NewsPostSerializer(n).data for n in NewsPost.objects.order_by('-date')]
    photos = [MediaPhotoSerializer(m).data for m in MediaPhoto.objects.all()]
    videos = [MediaVideoSerializer(m).data for m in MediaVideo.objects.all()]

    effusion_params = {
        'members': members,
        'media': videos + photos,
        'homeImages': home_images,
        'news': news
    }
    context = { 'effusion_params': json.dumps(effusion_params) }
    return render(request, 'index.html', context)
