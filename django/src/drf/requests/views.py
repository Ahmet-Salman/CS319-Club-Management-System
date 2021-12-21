from django.http.response import HttpResponse
from rest_framework import generics, serializers
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import  DeleteClubRequestSerializer,CreateClubRequestSerializer, JoinClubRequestSerializer,JoinClubRequestWithInfoSerializer
from .models import CreateClubRequest, JoinClubWithInfoRequest, Request,DeleteClubRequest,JoinClubRequest
from accounts.permissions import IsAdminOrReadOnly
from rest_framework import status
from django.http import Http404
from accounts.models import Account
from clubs.models import Club
from club_enrollment.models import ClubEnrollment
from datetime import datetime, timedelta
from django.views.generic import ListView
from clubs.permissions import IsClubOwnerOrReadOnly
    
#club manager
class DeleteClubRequestList(generics.ListCreateAPIView):
    permission_classes = [IsClubOwnerOrReadOnly]
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
                return Response({"error": "USER HAS CLUB"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
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
        name = clubRequest.club_name
        description = clubRequest.club_description
        user_id = clubRequest.user_id
        #set the student as club manager
        student = Account.objects.get(id=user_id)
        student.is_club_manager = True
        student.save()
        data = Club(name=name, description=description,owner=student)
        data.save()
        clubRequest.delete()
        return HttpResponse( status = 200)

class RejectClubRequest(APIView):
    def post(self,request):
        #get club request id
        club_request_id = request.data['club_request_id']
        #get club request
        clubRequest = CreateClubRequest.objects.get(id=club_request_id)
        #maybe some additional code can be added
        clubRequest.delete()
        return HttpResponse( status = 200)

class JoinClubRequestAPI(APIView):
    #permission_classes = [IsAdminOrReadOnly]
    def post(self,request):
        serializer = JoinClubRequestSerializer(data=request.data)
        if serializer.is_valid():
            student = Account.objects.get(id=request.data['user_id'])
            joinClubWithInfo = JoinClubWithInfoRequest(user_id = request.data['user_id'],club_id =request.data['club_id'],name= student.first_name,surname=student.last_name,email=student.email)
            joinClubWithInfo.save()
            Otherserializer = JoinClubRequestWithInfoSerializer(joinClubWithInfo)
            return Response(Otherserializer.data,status=status.HTTP_200_OK)
        else:
            data = serializer.errors
            return Response(serializer.errors,status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def get(self,request):
        objects = JoinClubWithInfoRequest.objects.all()
        serializer = JoinClubRequestWithInfoSerializer(objects,many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


    serializer_class = JoinClubRequestWithInfoSerializer
    model = JoinClubWithInfoRequest
    def get_queryset(self):
        user_id = self.request.query_params.get("userId")
        club_id = self.request.query_params.get("clubId")
        if (user_id and club_id):
            return JoinClubWithInfoRequest.objects.filter(club_id=club_id).filter(user_id=user_id)
        elif user_id:
            return JoinClubWithInfoRequest.objects.filter(user_id=user_id)
        elif club_id:
            return JoinClubWithInfoRequest.objects.filter(club_id=club_id)
        return JoinClubWithInfoRequest.objects.all()

class ApproveJoinClubRequest(APIView):
        def post(self,request):
            #get club request id
            join_id = request.data['id'];
            #get club request
            join_request = JoinClubWithInfoRequest.objects.get(id=join_id)
            #maybe some additional code can be added
            data = ClubEnrollment(club_id=join_request.club_id, user_id=join_request.user_id,title="user")
            data.save()
            join_request.delete()
            return HttpResponse( status = 200)


class RejectJoinClubRequest(APIView):
        def post(self,request):
            #get club request id
            join_id = request.data['id'];
            #get club request
            join_request = JoinClubWithInfoRequest.objects.get(id=join_id)
            #maybe some additional code can be added
            join_request.delete()
            return HttpResponse( status = 200)


