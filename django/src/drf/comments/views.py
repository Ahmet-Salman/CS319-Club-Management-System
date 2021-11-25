# Create your views here.

from rest_framework import generics, permissions
from .serializers import CommentSerializer
from .models import Comment
from .permissions import IsCommentOwnerOrReadOnly

class CommentList(generics.ListCreateAPIView):
    permission_classes = [permissions.IsAuthenticated]
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

    def perform_create(self,serializer):
      serializer.save(owner=self.request.user)

class CommentDetails(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsCommentOwnerOrReadOnly]
    serializer_class = CommentSerializer
    lookup_url_kwarg = 'id'
    queryset = Comment.objects.all()

    def perform_create(self,serializer):
      serializer.save(owner=self.request.user)