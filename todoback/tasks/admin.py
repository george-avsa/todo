from django.contrib import admin

from .models import Types, Tasks, Statuses, Priority

# Register your models here.
class TasksAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'priority', 'type', 'start_date', 'deadline', 'status')

class TypesAdmin(admin.ModelAdmin):
    list_display = ('type_name', 'id')

class StatusAdmin(admin.ModelAdmin):
    list_display = ('status_name', 'id')

class PriorityAdmin(admin.ModelAdmin):
    list_display = ('pr_name', 'id')

admin.site.register(Types, TypesAdmin)
admin.site.register(Tasks, TasksAdmin)
admin.site.register(Statuses, StatusAdmin)
admin.site.register(Priority, PriorityAdmin)