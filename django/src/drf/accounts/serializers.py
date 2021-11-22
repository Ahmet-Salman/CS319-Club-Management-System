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