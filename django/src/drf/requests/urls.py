from .views import CreateClubRequestList,CreateClubRequest, DeleteClubRequestList
from django.urls import path
from django.views.decorators.csrf import csrf_exempt

urlpatterns = [
    path('api/request/createclublist', CreateClubRequestList.as_view()),
    path('api/request/createclub', CreateClubRequest.as_view()),
    path('api/request/deleteclublist', DeleteClubRequestList.as_view()),
]