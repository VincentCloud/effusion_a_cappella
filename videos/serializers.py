from rest_framework import serializers
from videos.models import MediaPhoto, MediaVideo

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
        ret['id'] = ret['video_id']
        return ret
