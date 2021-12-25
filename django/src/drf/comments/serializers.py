from rest_framework import serializers
from accounts.serializers import SimpleAccountSerializer
from .models import Comment

class ReadCommentSerializer(serializers.ModelSerializer):
    owner = SimpleAccountSerializer(read_only=True)
    class Meta:
        model = Comment
        fields = '__all__'

class WriteCommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = '__all__'