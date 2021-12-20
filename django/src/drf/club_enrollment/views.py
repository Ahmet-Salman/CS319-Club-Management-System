from django.shortcuts import render
from rest_framework.views import APIView
from .models import ClubEnrollment
from .serializers import ClubEnrollmentSearializer
from rest_framework import generics

class ClubEnrollmentsAPI(generics.ListCreateAPIView):
    #permission_classes = [IsAdminOrReadOnly]
    queryset = ClubEnrollment.objects.all()
    serializer_class = ClubEnrollmentSearializer
