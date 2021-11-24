from rest_framework import serializers
from .models import Comment

# Club Serializer
class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = '__all__'
        read_only_fields = ('owner',)