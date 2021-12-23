from django.db import models
from django.db.models.base import Model
from clubs.models import Club
from accounts.models import Account
# Create your models here.
class ClubEnrollment(models.Model):
    #id auto added
    club = models.ForeignKey(Club,on_delete=models.CASCADE)
    user_id = models.ForeignKey(Account,on_delete=models.PROTECT)
    title = models.CharField(max_length=1000, default=" ")
    timeStamp = models.CharField(max_length=1000, default=" ")
    leaveTimeStamp = models.CharField(max_length=1000, default=" ")

    def __str__(self):
        return str(self.id)