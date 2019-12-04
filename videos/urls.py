from django.urls import path, re_path
from . import views

urlpatterns = [
    path('api/media/', views.MediaListCreate.as_view(), name = 'media' ),
    re_path(r'.*', views.react_app)
]
