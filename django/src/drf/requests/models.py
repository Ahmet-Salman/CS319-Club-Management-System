from django.db import models
from accounts.models import Account

# Create your models here.
class Request(models.Model):
    # define department name and description columns, the id column will be added automatically.
    timeStamp = models.CharField(max_length=1000, default=" ")
    student = models.OneToOneField(Account, on_delete=models.CASCADE,default=None)
    status = models.CharField(max_length=1000, default="")
    class Meta:
        abstract = True


    def __str__(self):
        return str(self.name)

class CreateClubRequest(Request):
    # define department name and description columns, the id column will be added automatically.
    clubName = models.CharField(max_length=1000, default="")
    clubDescription = models.CharField(max_length=1000, default="")

    def __str__(self):
        return str(self.name)

class DeleteClubRequest(Request):
    # define department name and description columns, the id column will be added automatically.
    clubId = models.CharField(max_length=1000)
    
    def __str__(self):
        return str(self.name)



