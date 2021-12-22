from django.db import models

# Create your models here.
class Request(models.Model):
    user_id = models.IntegerField()
    date = models.DateTimeField(auto_now_add = True)

    class Meta:
        abstract = True


    def __str__(self):
        return str(self.user_id)

class CreateClubRequest(Request):
    # define department name and description columns, the id column will be added automatically.
    club_name = models.CharField(max_length=1000, default="")
    club_description = models.CharField(max_length=1000, default="")


class DeleteClubRequest(Request):
    club_id = models.CharField(max_length=1000)
    def __str__(self):
        return str(self.id)

class JoinClubRequest(Request):
    club_id = models.CharField(max_length=1000)

    def __str__(self):
        return str(self.id)

class JoinClubWithInfoRequest(Request):
    club_id = models.CharField(max_length=1000)
    name= models.CharField(max_length=1000)
    surname=models.CharField(max_length=1000)
    email=models.CharField(max_length=1000)

    def __str__(self):
        return str(self.club_id)



