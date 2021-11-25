from rest_framework import generics
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import  RequestSerializers
from .models import CreateClubRequest, Request
from accounts.permissions import IsAdminOrReadOnly
from rest_framework import status
from django.http import Http404

class CreateClubRequestList(generics.ListCreateAPIView):
    queryset = CreateClubRequest.objects.all()
    serializer_class = RequestSerializers

class CreateClubRequest(APIView):

    def post(self, request, id):
        serializer = RequestSerializers(data=request.data)
        if serializer.is_valid():
            #if CreateClubRequest.objects.filter(id = id).exists():
            # at least one object satisfying query exists
            #    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            #else:
            #    serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
