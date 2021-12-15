from django.http.response import HttpResponse
from rest_framework import generics, serializers
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import  DeleteClubRequestSerializer,CreateClubRequestSerializer
from .models import CreateClubRequest, Request,DeleteClubRequest
from accounts.permissions import IsAdminOrReadOnly
from rest_framework import status
from django.http import Http404
from accounts.models import Account
from clubs.models import Club
from datetime import datetime, timedelta
from django.views.generic import ListView

    
#club manager
class DeleteClubRequestList(generics.ListCreateAPIView):
    queryset = DeleteClubRequest.objects.all()
    serializer_class = DeleteClubRequestSerializer

#user 
class CreateClubRequestAPI(APIView):
    def post(self, request):
        def userHasClub():
            return Account.objects.get( id = request.data['user_id'] ).is_club_manager
            
        print(userHasClub())
        serializer = CreateClubRequestSerializer(data=request.data)
        if serializer.is_valid():
            if(userHasClub()):
                return Response(serializer.errors, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
            else:
                serializer.save()
                return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request):
        objects = CreateClubRequest.objects.all()
        serializer = CreateClubRequestSerializer(objects,many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def delete(self, request):
        objects = CreateClubRequest.objects.all()
        serializer = CreateClubRequestSerializer(objects,many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)



#admin
class ApproveClubRequest(APIView):
    
    def post(self,request):
        #get club request id
        club_request_id = request.data['club_request_id']
        #get club request
        clubRequest = CreateClubRequest.objects.get(id=club_request_id)
        #turn the club request into a club
        #first turn request to objeect
        name = clubRequest.clubName
        description = clubRequest.clubDescription
        user_id = clubRequest.user_id
        #set the student as club manager
        student = Account.objects.get(id=user_id)
        student.is_club_manager = True
        student.save()
        data = Club(name=name, description=description,owner=student)
        data.save()
        clubRequest.delete()
        return HttpResponse( status = 200)

