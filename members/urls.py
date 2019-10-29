from django.urls import path
from . import views

urlpatterns = [
    path('api/members/', views.CurrentListCreate.as_view(), name = 'members' ),
]