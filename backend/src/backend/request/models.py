from django.db import models

# Create your models here.
class Request(models.Model):
    id = models.TextField(primary_key=True)
    studentId = models.TextField()
    timeStramp = models.TextField()
    status = models.TextField()

class CreateClubRequest(models.Model):
    request = models.OneToOneField(
        Request,
        on_delete=models.CASCADE,
        primary_key=True,
    )
    clubName = models.TextField()
    clubDescription =  models.TextField()

class JoinClubRequest(models.Model):
    request = models.OneToOneField(
        Request,
        on_delete=models.CASCADE,
        primary_key=True,
    )
    clubId = models.TextField()

class DeleteClubRequest(models.Model):
    request = models.OneToOneField(
        Request,
        on_delete=models.CASCADE,
        primary_key=True,
    )
    clubId = models.TextField()




