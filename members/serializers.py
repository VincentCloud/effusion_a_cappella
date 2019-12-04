from rest_framework import serializers
from members.models import Current, Alumni
from collections import OrderedDict

class CurrentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Current
        fields = '__all__'
    

    def to_representation(self, instance):
        ret = super().to_representation(instance)
        # Here we filter the null values and creates a new dictionary
        # We use OrderedDict like in original method
        ret = OrderedDict(list(filter(lambda x: x[1], ret.items())))
        return ret

class AlumniSerializer(serializers.ModelSerializer):
    class Meta:
        model = Alumni
        fields = '__all__'
