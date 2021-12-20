from .views import CreateClubRequestAPI, DeleteClubRequestList,ApproveClubRequest, RejectClubRequest,JoinClubRequestAPI,ApproveJoinClubRequest,RejectJoinClubRequest
from django.urls import path
from django.views.decorators.csrf import csrf_exempt
#from .scheduler import scheduler
urlpatterns = [
    path('api/request/createclubrequest', CreateClubRequestAPI.as_view()),
    path('api/request/deleteclubrequest', DeleteClubRequestList.as_view()),
    path('api/request/approveclubrequest', ApproveClubRequest.as_view()),
    path('api/request/rejectclubrequest', RejectClubRequest.as_view()),
    path('api/request/joinclubrequest', JoinClubRequestAPI.as_view()),
    path('api/request/approvejoin', ApproveJoinClubRequest.as_view()),
    path('api/request/rejectjoin', RejectJoinClubRequest.as_view()),
]
#scheduler.start()
