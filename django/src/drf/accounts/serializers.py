from rest_framework import serializers
from .models import Account

# Account Serializer
class AccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = "__all__"
        extra_kwargs = {"password": {"write_only": True}}
        read_only_fields = ('id',)

    def create(self, validated_data):
        account = Account.objects.create(
            student_id=validated_data['student_id'],
        )
        account.set_password(validated_data['password'])
        account.save()
        return account

class SimpleAccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = ('id', 'student_id', 'first_name', 'last_name',)
        read_only_fields = ('id', 'student_id', 'first_name', 'last_name',)

class ChangePasswordSerializer(serializers.Serializer):
    model = Account

    """
    Serializer for password change endpoint.
    """
    old_password = serializers.CharField(required=True)
    new_password = serializers.CharField(required=True)