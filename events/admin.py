from django.contrib import admin
from import_export.admin import ImportExportModelAdmin
from .models import NewsPost


@admin.register(NewsPost)
class NewsPostAdmin(ImportExportModelAdmin):
    pass
