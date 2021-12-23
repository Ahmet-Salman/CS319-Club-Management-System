from rest_framework import serializers
from accounts.serializers import AccountSerializer
from .models import Club

# Club Serializer
class ReadClubSerializer(serializers.ModelSerializer):
    owner = AccountSerializer(read_only=True)
    class Meta:
        model = Club
        fields = '__all__'

class WriteClubSerializer(serializers.ModelSerializer):
    class Meta:
        model = Club
        fields = '__all__'