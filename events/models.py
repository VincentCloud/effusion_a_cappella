from django.db import models
from datetime import date

class NewsPost(models.Model):
    title = models.CharField(max_length=100)
    date = models.DateField(default=date.today)
    body = models.TextField(default='')

    def __str__(self):
        return self.title
