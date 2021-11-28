# Create your views here.

from rest_framework import generics
from .serializers import ClubSerializer
from .models import Club
from accounts.permissions import IsAdminOrReadOnly
from .permissions import IsClubOwnerOrReadOnly

class ClubList(generics.ListCreateAPIView):
    permission_classes = [IsAdminOrReadOnly]
    queryset = Club.objects.all()
    serializer_class = ClubSerializer

class ClubDetails(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsClubOwnerOrReadOnly]
    serializer_class = ClubSerializer
    lookup_url_kwarg = 'id'
    queryset = Club.objects.all()