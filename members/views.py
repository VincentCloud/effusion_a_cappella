from django.shortcuts import render
from members.models import Member, Alumni
from members.serializers import MemberSerializer, AlumniSerializer
from rest_framework import generics

class MemberListCreate(generics.ListCreateAPIView):
    '''
    Generic API views for the current members models
    '''
    queryset = Member.objects.all()
    serializer_class = MemberSerializer

class AlumniListCreate(generics.ListCreateAPIView):
    '''
    Generic API views for the alumni models
    '''
    queryset = Alumni.objects.all()
    serializer_class = AlumniSerializer
