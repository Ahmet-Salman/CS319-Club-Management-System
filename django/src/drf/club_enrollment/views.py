from django.shortcuts import render
from rest_framework.views import APIView
from .models import ClubEnrollment
from .serializers import ClubEnrollmentSearializer
from rest_framework import generics
from django.http.response import HttpResponse

class ClubEnrollmentsAPI(generics.ListCreateAPIView):
    serializer_class = ClubEnrollmentSearializer
    model = ClubEnrollment
    def get_queryset(self):
        user_id = self.request.query_params.get("user_id")
        club_id = self.request.query_params.get("club_id")
        if (user_id and club_id):
            return ClubEnrollment.objects.filter(club=club_id).filter(user_id=user_id)
        elif user_id:
            return ClubEnrollment.objects.filter(user_id=user_id)
        elif club_id:
            return ClubEnrollment.objects.filter(club=club_id)
        return ClubEnrollment.objects.all()

class ClubEnrollmentsDELETE(APIView):
    model = ClubEnrollment
    def delete(self,request):
        user_id = self.request.query_params.get("user_id")
        club_id = self.request.query_params.get("club_id")
        if (user_id and club_id):
            object =  ClubEnrollment.objects.filter(club=club_id).filter(user_id=user_id)
            print(object.data)
            object.delete()
            return HttpResponse( status = 200)
        return HttpResponse( status = 500)
