from rest_framework import serializers
from events.models import NewsPost

class NewsPostSerializer(serializers.ModelSerializer):
    date = serializers.DateField('%Y/%m/%d')

    class Meta:
        model = NewsPost
        fields = '__all__'
