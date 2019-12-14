from django.db import models

IMAGE_DIR = 'images/'

class Member(models.Model):
    bio = models.TextField(default='')
    execPosition = models.CharField(max_length=200, default='', blank=True, null=True)
    name = models.CharField(max_length=200)
    part = models.CharField(max_length=200)
    src = models.ImageField(upload_to=IMAGE_DIR)
    thumbnail = models.ImageField(upload_to=IMAGE_DIR, blank=True, null=True)
    years = models.CharField(max_length=100, default='')

    def __str__(self):
        return self.name


class Alumni(models.Model):
    picture = models.ImageField(upload_to='images/')
    info = models.CharField(max_length=5000)
    year = models.CharField(max_length=100, default='')
