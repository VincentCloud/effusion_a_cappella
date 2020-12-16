from django.contrib import admin
from import_export.admin import ImportExportModelAdmin
from .models import MediaPhoto, MediaVideo
from .youtubeclient import fetch_title


class YouTubeVideoAdmin(ImportExportModelAdmin):
    fields = ['video_id']

    def save_model(self, request, obj, form, change):
        obj.caption = fetch_title(obj.video_id)
        obj.save()


@admin.register(MediaPhoto)
class MediaPhotoAdmin(ImportExportModelAdmin):
    pass


admin.site.register(MediaVideo, YouTubeVideoAdmin)
