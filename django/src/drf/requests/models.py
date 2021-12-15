from django.db import models
from accounts.models import Account

# Create your models here.
class Request(models.Model):
    timeStamp = models.CharField(max_length=1000, default=" ")
    user_id = models.IntegerField()
    status = models.CharField(max_length=1000, default="")
    date = models.DateTimeField(auto_now_add = True,blank=True)

    class Meta:
        abstract = True


    def __str__(self):
        return str(self.user_id)

class CreateClubRequest(Request):
    # define department name and description columns, the id column will be added automatically.
    clubName = models.CharField(max_length=1000, default="")
    clubDescription = models.CharField(max_length=1000, default="")


class DeleteClubRequest(Request):
    clubId = models.CharField(max_length=1000)
    
    def __str__(self):
        return str(self.name)

class JoinClubRequest(Request):
    clubId = models.CharField(max_length=1000)
    
    def __str__(self):
        return str(self.name)



