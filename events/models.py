from django.db import models
import datetime


class Event(models.Model):
    image = models.ImageField(upload_to='images/')
    heading1 = models.CharField(max_length=200)
    body1 = models.TextField()
    date1 = models.DateTimeField()


class Announcement(models.Model):
    heading2 = models.CharField(max_length=200)
    body2 = models.TextField()
    date2 = models.DateTimeField()
