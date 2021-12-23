from rest_framework import serializers
from .models import ClubEnrollment
from accounts.serializers import AccountSerializer

class ClubEnrollmentSearializer(serializers.ModelSerializer):
    user_id = AccountSerializer(read_only=True)
    class Meta:
        model = ClubEnrollment
        fields = '__all__'
    

