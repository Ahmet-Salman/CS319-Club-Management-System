from .views import ClubList, ClubDetails
from django.urls import path
from django.views.decorators.csrf import csrf_exempt

urlpatterns = [
    path('api/clubs', ClubList.as_view()),
    path('api/club/<int:id>', ClubDetails.as_view())
]