# Generated by Django 2.2.3 on 2019-10-29 02:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('members', '0007_auto_20191029_0230'),
    ]

    operations = [
        migrations.AlterField(
            model_name='current',
            name='execPosition',
            field=models.CharField(blank=True, default='', max_length=200, null=True),
        ),
    ]