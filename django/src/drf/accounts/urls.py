from .views import LoginAPI, LogoutAPI, AccountList, AccountDetails, ChangePasswordView
from django.urls import path
from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [
    path('api/login', LoginAPI.as_view()),
    path('api/logout', LogoutAPI.as_view()),
    path('api/accounts', AccountList.as_view()),
    path('api/account/<int:id>', AccountDetails.as_view()),
    path('api/change-password/', ChangePasswordView.as_view()),
]