from django.urls import path
from . import views

urlpatterns = [
    path('api/members/', views.MemberListCreate.as_view(), name='members'),
]
