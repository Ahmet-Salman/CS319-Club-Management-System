# Create your views here.

from rest_framework import generics, permissions
from .serializers import ReadCommentSerializer, WriteCommentSerializer
from .models import Comment
from .permissions import IsCommentOwnerOrReadOnly

class CommentList(generics.ListCreateAPIView):
    # permission_classes = [permissions.IsAuthenticated]
    queryset = Comment.objects.all()

    #add club id as parameter

    def perform_create(self,serializer):
      serializer.save(owner=self.request.user)

    def get_serializer_class(self):
      if self.request.method in permissions.SAFE_METHODS:
          return ReadCommentSerializer
      return WriteCommentSerializer

class CommentDetails(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsCommentOwnerOrReadOnly]
    lookup_url_kwarg = 'id'
    queryset = Comment.objects.all()

    def perform_create(self,serializer):
      serializer.save(owner=self.request.user)

    def get_serializer_class(self):
      if self.request.method in permissions.SAFE_METHODS:
          return ReadCommentSerializer
      return WriteCommentSerializer