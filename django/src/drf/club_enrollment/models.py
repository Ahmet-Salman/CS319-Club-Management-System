from django.db import models
from django.db.models.base import Model

# Create your models here.
class ClubEnrollment(models.Model):
    #id auto added
    club_id = models.IntegerField()
    user_id = models.IntegerField()
    title = models.CharField(max_length=1000, default=" ")
    timeStamp = models.CharField(max_length=1000, default=" ")
    leaveTimeStamp = models.CharField(max_length=1000, default=" ")
