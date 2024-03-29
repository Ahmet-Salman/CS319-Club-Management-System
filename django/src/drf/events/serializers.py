from rest_framework import serializers
from .models import Event

# Event Serializer
class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = '__all__'