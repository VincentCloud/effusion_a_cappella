from rest_framework import serializers
from members.models import Current, Alumni

class CurrentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Current
        if Current.is_exec:
            fields = ('bio', 'execPosition', 'name', 'part', 'src', 'years')
        else:
            fields = ('bio', 'name', 'part', 'src', 'years')

class AlumniSerializer(serializers.ModelSerializer):
    class Meta:
        model = Alumni
        fields = '__all__'
