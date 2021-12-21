from django.db import models

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
    club_name = models.CharField(max_length=1000, default="")
    club_description = models.CharField(max_length=1000, default="")


class DeleteClubRequest(Request):
    club_id = models.CharField(max_length=1000)

class JoinClubRequest(Request):
    club_id = models.CharField(max_length=1000)



