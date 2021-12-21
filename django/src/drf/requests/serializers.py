from rest_framework import serializers
from .models import CreateClubRequest, DeleteClubRequest, JoinClubRequest, Request,JoinClubWithInfoRequest

class RequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Request
        fields = '__all__'
    

class CreateClubRequestSerializer(RequestSerializer):
    class Meta:
        model = CreateClubRequest
        fields = '__all__'
    

class DeleteClubRequestSerializer(RequestSerializer):
    class Meta:
        model = DeleteClubRequest
        fields = '__all__'

class JoinClubRequestSerializer(RequestSerializer):
    class Meta:
        model = JoinClubRequest
        fields = '__all__'

class JoinClubRequestWithInfoSerializer(RequestSerializer):
    class Meta:
        model = JoinClubWithInfoRequest
        fields = '__all__'




