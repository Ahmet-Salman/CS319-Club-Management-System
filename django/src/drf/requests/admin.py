from django.contrib import admin

from .models import CreateClubRequest, DeleteClubRequest, JoinClubWithInfoRequest

# Register your models here.
admin.site.register(CreateClubRequest)
admin.site.register(JoinClubWithInfoRequest)
admin.site.register(DeleteClubRequest)