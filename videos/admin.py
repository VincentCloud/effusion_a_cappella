from django.contrib import admin
from .models import MediaPhoto, MediaVideo
from .youtubeclient import fetch_title

class YouTubeVideoAdmin(admin.ModelAdmin):
    fields = ['video_id']

    def save_model(self, request, obj, form, change):
        obj.caption = fetch_title(obj.video_id)
        obj.save()

admin.site.register(MediaPhoto)
admin.site.register(MediaVideo, YouTubeVideoAdmin)
