from django.db import models

class Current(models.Model):
    image = models.ImageField(upload_to='images/')
    name = models.CharField(max_length=200)
    part = models.CharField(max_length=200)
    exec = models.CharField(max_length=200, default='')


class Alumni(models.Model):
    picture = models.ImageField(upload_to='image/')
    info = models.CharField(max_length=5000)
    year = models.CharField(max_length=100, default='')

