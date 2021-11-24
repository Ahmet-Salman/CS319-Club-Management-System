# Create your views here.
from .models import Announcement
from .serializers import AnnouncementSerializer
from rest_framework.response import Response
from rest_framework import status
from .permissions import IsAnnouncementOwnerOrReadOnly
from clubs.permissions import IsClubOwnerOrReadOnly
from clubs.models import Club
from rest_framework import generics

class AnnouncementList(generics.ListCreateAPIView):
    permission_classes = (IsClubOwnerOrReadOnly,) 
    serializer_class = AnnouncementSerializer
    model = Announcement
    def get_queryset(self):
        club_id = self.request.query_params.get("clubId")
        if club_id:
            return Announcement.objects.filter(club_id=club_id)
        return Announcement.objects.all()

    def create(self, request, *args,**kwargs):
        serializer = AnnouncementSerializer(data=request.data)
        if serializer.is_valid():
            club = Club.objects.get(id=serializer.validated_data['club'].id)
            self.check_object_permissions(request, club)
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class AnnouncementDetails(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAnnouncementOwnerOrReadOnly]
    serializer_class = AnnouncementSerializer
    lookup_url_kwarg = 'id'
    queryset = Announcement.objects.all()
        