from rest_framework import generics
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import  DeleteClubRequestSerializer,CreateClubRequestSerializer
from .models import CreateClubRequest, Request,DeleteClubRequest
from accounts.permissions import IsAdminOrReadOnly
from rest_framework import status
from django.http import Http404
from accounts.models import Account

class CreateClubRequestList(generics.ListCreateAPIView):
    queryset = CreateClubRequest.objects.all()
    serializer_class = CreateClubRequestSerializer

class DeleteClubRequestList(generics.ListCreateAPIView):
    queryset = DeleteClubRequest.objects.all()
    serializer_class = DeleteClubRequestSerializer

class CreateClubRequest(APIView):
    def post(self, request):
        def userHasClub():
            if Account.objects.get( student_id = request.data.student ).is_club_manager:
                return True
            else: 
                return False

        serializer = CreateClubRequestSerializer(data=request.data)
        if serializer.is_valid():
            if(userHasClub()):
                return Response(serializer.errors, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
            else:
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    


