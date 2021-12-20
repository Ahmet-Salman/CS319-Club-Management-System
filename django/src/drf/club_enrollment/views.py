from django.shortcuts import render
from rest_framework.views import APIView

# Create your views here.
class LeaveClub(APIView):
    def post(self, request):
        #get club request id
        club_id = request.data['club_id']
        #get club request
        clubRequest = CreateClubRequest.objects.get(club_id=club_request_id)
        #maybe some additional code can be added
        clubRequest.delete()
        return HttpResponse( status = 200)