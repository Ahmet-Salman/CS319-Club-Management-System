from .views import CreateClubRequestAPI, DeleteClubRequestList,ApproveClubRequest
from django.urls import path
from django.views.decorators.csrf import csrf_exempt
#from .scheduler import scheduler
urlpatterns = [
    path('api/request/createclub', CreateClubRequestAPI.as_view()),
    path('api/request/deleteclublist', DeleteClubRequestList.as_view()),
    path('api/request/approveclubrequest', ApproveClubRequest.as_view()),
]
#scheduler.start()
