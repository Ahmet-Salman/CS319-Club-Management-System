from .views import CommentList, CommentDetails
from django.urls import path

urlpatterns = [
    path('api/comments', CommentList.as_view()),
    path('api/comment/<int:id>', CommentDetails.as_view())
]