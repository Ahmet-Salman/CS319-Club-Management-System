from .views import CreateClubRequestList
from django.urls import path
from django.views.decorators.csrf import csrf_exempt

urlpatterns = [
    path('api/request/createclublist', CreateClubRequestList.as_view()),
    path('api/request/createclub', CreateClubRequestList.as_view()),
]