from django.shortcuts import render

# Create your views here.

from rest_framework import generics
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import ClubSerializer
from .models import Club
from accounts.permissions import IsAdminOrReadOnly
from .permissions import IsOwnerOrReadOnly
from rest_framework import status
from django.http import Http404

class ClubList(generics.ListCreateAPIView):
    permission_classes = (IsAdminOrReadOnly,) 
    queryset = Club.objects.all()
    serializer_class = ClubSerializer

class ClubDetails(APIView):
    permission_classes = (IsOwnerOrReadOnly,) 
    
    def get_object(self, request, id):
        try:
            club = Club.objects.get(id=id)
        except Club.DoesNotExist:
            raise Http404
        self.check_object_permissions(request, club)
        return club

    def get(self, request, id):
        club = self.get_object(request, id)
        serializer = ClubSerializer(club)
        return Response(serializer.data)

    def put(self, request, id):
        club = self.get_object(request,id)
        serializer = ClubSerializer(club, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id):
        club = self.get_object(request, id)
        club.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)