from rest_framework import serializers
from members.models import Member, Alumni
from collections import OrderedDict

class MemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Member
        fields = '__all__'

    def to_representation(self, instance):
        ret = super().to_representation(instance)
        ret = OrderedDict(filter(lambda x: x[1], ret.items()))
        if 'exec_position' in ret:
            ret['execPosition'] = ret['exec_position']
            del ret['exec_position']
        return ret

class AlumniSerializer(serializers.ModelSerializer):
    class Meta:
        model = Alumni
        fields = '__all__'
