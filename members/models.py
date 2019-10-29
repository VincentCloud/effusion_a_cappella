from django.db import models

class Current(models.Model):
    '''
    Model for the current members in Effusion
    '''
    bio = models.CharField(max_length=3000, default='')
    execPosition = models.CharField(max_length=200, default='', blank=True, null=True)
    name = models.CharField(max_length=200)
    part = models.CharField(max_length=200)
    src = models.ImageField(upload_to='images/') #modify this part
    years = models.CharField(max_length=100, default='')
    is_exec = models.BooleanField(default=False)


    def __str__(self):
        return self.name


class Alumni(models.Model):
    picture = models.ImageField(upload_to='images/')
    info = models.CharField(max_length=5000)
    year = models.CharField(max_length=100, default='')

