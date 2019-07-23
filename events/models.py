from django.db import models


class Event(models.Model):
    image = models.ImageField(upload_to='images/')
    heading1 = models.CharField(max_length=200)
    body1 = models.CharField(max_length=5000)


class Announcement(models.Model):
    heading2 = models.CharField(max_length=200)
    body2 = models.CharField(max_length=5000)
