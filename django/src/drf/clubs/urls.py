from .views import ClubList, ClubDetails
from django.urls import path

urlpatterns = [
    path('api/clubs', ClubList.as_view()),
    path('api/club/<int:id>', ClubDetails.as_view())
]