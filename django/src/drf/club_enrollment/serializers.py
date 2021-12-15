from rest_framework import serializers
from .models import ClubEnrollment

class ClubEnrollmentSearializer(serializers.ModelSerializer):
    class Meta:
        model = ClubEnrollment
        fields = '__all__'
    

