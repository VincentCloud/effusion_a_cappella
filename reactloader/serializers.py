from rest_framework import serializers
from collections import OrderedDict

from .models import Member, HomeImage, MediaPhoto, MediaVideo, NewsPost

class MemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Member
        fields = '__all__'

    def to_representation(self, instance):
        ret = super().to_representation(instance)
        ret = OrderedDict(filter(lambda x: x[1], ret.items()))
        return ret

class HomeImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = HomeImage
        fields = '__all__'

class MediaPhotoSerializer(serializers.ModelSerializer):
    class Meta:
        model = MediaPhoto
        fields = '__all__'

    def to_representation(self, instance):
        ret = super().to_representation(instance)
        ret['type'] = 'photo'
        return ret

class MediaVideoSerializer(serializers.ModelSerializer):
    class Meta:
        model = MediaVideo
        fields = '__all__'

    def to_representation(self, instance):
        ret = super().to_representation(instance)
        ret['type'] = 'video'
        ret['id'] = ret['videoId']
        return ret

class NewsPostSerializer(serializers.ModelSerializer):
    date = serializers.DateField('%Y/%m/%d')

    class Meta:
        model = NewsPost
        fields = '__all__'
