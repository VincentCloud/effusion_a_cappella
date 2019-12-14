from django.urls import path
from . import views

urlpatterns = [
    path('api/posts/', views.NewsPostListCreate.as_view(), name='posts'),
]