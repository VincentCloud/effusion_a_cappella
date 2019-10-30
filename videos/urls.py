from django.urls import path
from . import views

urlpatterns = [
    path('api/media/', views.MediaListCreate.as_view(), name = 'media' ),
]