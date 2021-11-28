from django.shortcuts import render

# Create your views here.

from django.contrib.auth import login, logout, authenticate
from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework import status
from rest_framework import generics

from .models import Account
from .serializers import AccountSerializer
from django.http import Http404

class AccountList(APIView):
    permission_classes = (permissions.IsAdminUser,)

    def get(self, request):
        accounts = Account.objects.all()
        if accounts:
            serializer = AccountSerializer(accounts, many=True)
            return Response(serializer.data)
        raise Http404

    def post(self, request):
        serializer = AccountSerializer(data=request.data)
        if serializer.is_valid():
            account = serializer.save()
            account.save()
            token = Token.objects.get_or_create(user=account)[0].key
            data = {}
            data["user"] = serializer.data
            data["token"] = token
        else:
            data = serializer.errors
        return Response(data)

class AccountDetails(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [permissions.IsAdminUser]
    serializer_class = AccountSerializer
    lookup_url_kwarg = 'id'
    queryset = Account.objects.all()

class LoginAPI(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request):
        user = authenticate(username=request.data.get("student_id"), password=request.data.get("password"))
        if user is not None:
            # A backend authenticated the credentials
            login(request, user)
            token = Token.objects.get_or_create(user=user)[0].key
            data = {}
            serializers = AccountSerializer(user)
            data['user'] = serializers.data
            data['token'] = token
            return Response(data)
        else:
            # No backend authenticated the credentials
            return Response([], status=status.HTTP_401_UNAUTHORIZED)

class LogoutAPI(APIView):
    permission_classes = (permissions.IsAuthenticated,)

    def get(self, request):
        token = request.auth.key
        serializer = AccountSerializer(Token.objects.get(key=token).user)
        request.user.auth_token.delete()
        logout(request)
        return Response(serializer.data)