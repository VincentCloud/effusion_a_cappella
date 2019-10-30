from django.db import models
import datetime


class Event(models.Model):
    body = models.CharField(max_length=10000, default='')
    date = models.DateField(auto_now_add=True, null=True, blank=True)
    title = models.CharField(max_length=5000, default='')

    def __str__(self):
        return self.title
    
