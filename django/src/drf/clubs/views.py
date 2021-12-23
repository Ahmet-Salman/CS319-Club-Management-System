# Create your views here.

from rest_framework import generics, permissions
from .serializers import ReadClubSerializer, WriteClubSerializer
from .models import Club
from accounts.permissions import IsAdminOrReadOnly
from .permissions import IsClubOwnerOrReadOnly

class ClubList(generics.ListCreateAPIView):
    permission_classes = [IsAdminOrReadOnly]
    queryset = Club.objects.all()
    def get_serializer_class(self):
        if self.request.method in permissions.SAFE_METHODS:
            return ReadClubSerializer
        return WriteClubSerializer


class ClubDetails(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsClubOwnerOrReadOnly]
    lookup_url_kwarg = 'id'
    queryset = Club.objects.all()
    def get_serializer_class(self):
        if self.request.method in permissions.SAFE_METHODS:
            return ReadClubSerializer
        return WriteClubSerializer
        
    #make club managers no manager and delete related club enrollments
    def perform_destroy(self, instance):
        #get owner
        owner = instance.owner
        #make owner not club manager
        owner.is_club_manager = False;
        owner.save()
        instance.delete()
