from django.db import models
from django.db.models.base import Model
from clubs.models import Club
# Create your models here.
class ClubEnrollment(models.Model):
    #id auto added
    club = models.OneToOneField(Club,on_delete=models.CASCADE,primary_key=True)
    user_id = models.IntegerField()
    title = models.CharField(max_length=1000, default=" ")
    timeStamp = models.CharField(max_length=1000, default=" ")
    leaveTimeStamp = models.CharField(max_length=1000, default=" ")

    def __str__(self):
        return str(self.club)