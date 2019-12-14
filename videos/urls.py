from django.urls import path, re_path
from . import views

urlpatterns = [
    path('api/photos/', views.MediaPhotoListCreate.as_view(), name='photos'),
    path('api/videos/', views.MediaVideoListCreate.as_view(), name='videos')
]
