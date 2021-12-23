from .views import ClubEnrollmentsAPI,ClubEnrollmentsDELETE
from django.urls import path
from django.views.decorators.csrf import csrf_exempt
#from .scheduler import scheduler
urlpatterns = [
    path('api/request/clubenrollments', ClubEnrollmentsAPI.as_view()),
    path('api/request/deleteclubenrollments', ClubEnrollmentsDELETE.as_view()),
]
#scheduler.start()
