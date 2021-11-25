# Create your views here.
from .models import Event
from .serializers import EventSerializer
from rest_framework.response import Response
from rest_framework import status
from clubs.permissions import IsClubOwnerOrReadOnly
from .permissions import IsEventOwnerOrReadOnly
from clubs.models import Club
from rest_framework import generics

class EventList(generics.ListCreateAPIView):
    permission_classes = (IsClubOwnerOrReadOnly,) 
    serializer_class = EventSerializer
    model = Event
    def get_queryset(self):
        club_id = self.request.query_params.get("clubId")
        if club_id:
            return Event.objects.filter(club_id=club_id)
        return Event.objects.all()

    def create(self, request, *args,**kwargs):
        serializer = EventSerializer(data=request.data)
        if serializer.is_valid():
            club = Club.objects.get(id=serializer.validated_data['club'].id)
            self.check_object_permissions(request, club)
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class EventDetails(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsEventOwnerOrReadOnly]
    serializer_class = EventSerializer
    lookup_url_kwarg = 'id'
    queryset = Event.objects.all()
        