from django.db import models
from accounts.models import Account

# Create your models here.
class Request(models.Model):
    # define department name and description columns, the id column will be added automatically.
    timeStamp = models.CharField(max_length=1000, default="Awesome club")
    student = models.OneToOneField(Account, on_delete=models.CASCADE)
    status = models.CharField(max_length=1000, default="Awesome club")

    def __str__(self):
        return str(self.name)

class CreateClubRequest(models.Model):
    # define department name and description columns, the id column will be added automatically.
    request = models.OneToOneField(Request, on_delete=models.CASCADE)
    clubName = models.CharField(max_length=1000, default="Awesome club")
    clubDescription = models.CharField(max_length=1000, default="Awesome club")

    def __str__(self):
        return str(self.name)

class DeleteClubRequest(models.Model):
    # define department name and description columns, the id column will be added automatically.
    clubId = models.CharField(max_length=1000)

    def __str__(self):
        return str(self.name)



