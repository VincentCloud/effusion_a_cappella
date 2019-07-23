from django.db import models

class Video(models.Model):
    link = models.URLField()