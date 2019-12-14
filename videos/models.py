from django.db import models

IMAGE_DIR = 'images/'

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
