from .views import EventList, EventDetails
from django.urls import path

urlpatterns = [
    path('api/events', EventList.as_view()),
    path('api/event/<int:id>', EventDetails.as_view()),
]