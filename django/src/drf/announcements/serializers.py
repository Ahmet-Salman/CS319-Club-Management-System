from rest_framework import serializers
from .models import Announcement
from clubs.serializers import SimpleClubSerializer

# Announcement Serializer
class ReadAnnouncementSerializer(serializers.ModelSerializer):
    club = SimpleClubSerializer(read_only=True)
    class Meta:
        model = Announcement
        fields = '__all__'

# Announcement Serializer
class WriteAnnouncementSerializer(serializers.ModelSerializer):
    class Meta:
        model = Announcement
        fields = '__all__'