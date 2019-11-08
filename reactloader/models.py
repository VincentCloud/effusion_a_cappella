from django.db import models

from datetime import date

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

class HomeImage(models.Model):
    caption = models.CharField(max_length=100)
    credits = models.CharField(max_length=100)
    src = models.ImageField(upload_to=IMAGE_DIR)

    def __str__(self):
        return self.src.name

class MediaPhoto(models.Model):
    caption = models.CharField(max_length=100)
    src = models.ImageField(upload_to=IMAGE_DIR)

    def __str__(self):
        return self.src.name

class MediaVideo(models.Model):
    videoId = models.CharField(max_length=100)
    caption = models.CharField(max_length=100)

    def __str__(self):
        return self.caption

class NewsPost(models.Model):
    title = models.CharField(max_length=100)
    date = models.DateField(default=date.today)
    body = models.TextField(default='')

    def __str__(self):
        return self.title
