from rest_framework import serializers
from .models import Request

# Club Serializer
class RequestSerializers(serializers.ModelSerializer):
    class Meta:
        model = Request
        fields = '__all__'