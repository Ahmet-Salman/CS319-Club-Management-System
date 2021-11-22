from rest_framework import serializers
from .models import Club

# Club Serializer
class ClubSerializer(serializers.ModelSerializer):
    class Meta:
        model = Club
        fields = '__all__'