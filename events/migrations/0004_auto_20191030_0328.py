# Generated by Django 2.2.3 on 2019-10-30 03:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('events', '0003_auto_20190724_1554'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Announcement',
        ),
        migrations.RemoveField(
            model_name='event',
            name='body1',
        ),
        migrations.RemoveField(
            model_name='event',
            name='date1',
        ),
        migrations.RemoveField(
            model_name='event',
            name='heading1',
        ),
        migrations.RemoveField(
            model_name='event',
            name='image',
        ),
        migrations.AddField(
            model_name='event',
            name='body',
            field=models.CharField(default='', max_length=10000),
        ),
        migrations.AddField(
            model_name='event',
            name='date',
            field=models.DateField(auto_now_add=True, null=True),
        ),
        migrations.AddField(
            model_name='event',
            name='title',
            field=models.CharField(default='', max_length=5000),
        ),
    ]