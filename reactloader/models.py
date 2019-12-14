from django.db import models

IMAGE_DIR = 'images/'

class HomeImage(models.Model):
    caption = models.CharField(max_length=100)
    credits = models.CharField(max_length=100)
    src = models.ImageField(upload_to=IMAGE_DIR)

    def __str__(self):
        return self.src.name
