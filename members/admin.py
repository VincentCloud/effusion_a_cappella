from django.contrib import admin
from import_export.admin import ImportExportModelAdmin
from .models import Member, Alumni


@admin.register(Member)
class MemberAdmin(ImportExportModelAdmin):
    pass


@admin.register(Alumni)
class AlumniAdmin(ImportExportModelAdmin):
    pass
