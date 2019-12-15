from django.db import models
from django.core.exceptions import ValidationError

from videos.youtubeclient import fetch_title

IMAGE_DIR = 'images/'

class MediaPhoto(models.Model):
    caption = models.CharField(max_length=100)
    src = models.ImageField(upload_to=IMAGE_DIR)

    def __str__(self):
        return self.src.name

class MediaVideo(models.Model):
    video_id = models.CharField(max_length=100)
    caption = models.CharField(max_length=100)

    def __str__(self):
        return self.caption

    def clean(self):
        if self.video_id == '':
            return # Front end form validation should reject the request.

        title = fetch_title(self.video_id)
        if title is None:
            message = f'YouTube video "{self.video_id}" could not be found.'
            raise ValidationError(message)
