from rest_framework import serializers
from members.models import Current, Alumni

class CurrentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Current
        fields = '__all__'

class AlumniSerializer(serializers.ModelSerializer):
    class Meta:
        model = Alumni
        fields = '__all__'