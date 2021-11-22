from .views import AnnouncementList, AnnouncementDetails
from django.urls import path

urlpatterns = [
    path('api/announcements', AnnouncementList.as_view()),
    path('api/announcement/<int:id>', AnnouncementDetails.as_view()),
]