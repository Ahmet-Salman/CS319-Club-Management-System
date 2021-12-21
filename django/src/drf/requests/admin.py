from django.contrib import admin

from .models import CreateClubRequest, JoinClubRequest, DeleteClubRequest

# Register your models here.
admin.site.register(CreateClubRequest)
admin.site.register(JoinClubRequest)
admin.site.register(DeleteClubRequest)