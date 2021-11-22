# Create your views here.
from rest_framework.views import APIView
from .models import Announcement
from .serializers import AnnouncementSerializer
from rest_framework.response import Response
from django.http import Http404
from rest_framework import status
from clubs.permissions import IsOwnerOrReadOnly
from clubs.models import Club

class AnnouncementList(APIView):
    permission_classes = (IsOwnerOrReadOnly,) 
    def get(self, request):
        clubId = request.query_params.get("clubId")
        if clubId:
            announcements = Announcement.objects.filter(club__id=clubId)
            if announcements:
                serializer = AnnouncementSerializer(announcements, many=True)
                return Response(serializer.data)
            raise Http404
        raise Http404

    def post(self, request):
        clubId = request.query_params.get("clubId")
        if clubId:
            club = Club.objects.get(id=clubId)
            self.check_object_permissions(request, club)
            serializer = AnnouncementSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        raise Http404

class AnnouncementDetails(APIView):
    permission_classes = (IsOwnerOrReadOnly,)

    def get_object(self, request, id):
        try:
            announcement = Announcement.objects.get(id=id)
            self.check_object_permissions(request, announcement)
        except Announcement.DoesNotExist:
            raise Http404

    def get(self, request, id):
        announcement = self.get_object(request, id)
        serializer = AnnouncementSerializer(announcement)
        return Response(serializer.data)

    def put(self, request, id):
        announcement = self.get_object(request, id)
        serializer = AnnouncementSerializer(announcement, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id):
        announcement = self.get_object(request, id)
        announcement.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
        