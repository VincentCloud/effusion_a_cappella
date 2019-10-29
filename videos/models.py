from django.db import models

class Media(models.Model):
    caption = models.CharField(max_length=500)
    id = models.CharField(max_length=100, primary_key=True)
    type = models.CharField(max_length=100)

    def __str__(self):
        return self.caption
    