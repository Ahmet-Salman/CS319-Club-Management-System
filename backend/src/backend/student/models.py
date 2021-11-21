from django.db import models
from django.db.models.fields import TextField

from account.models import Account
# Create your models here.
class Student(models.Model):
    account = models.OneToOneField(
        Account,
        on_delete=models.CASCADE,
        primary_key=True,
    )
    
    department=models.TextField(null = True)
    clubEnrollments=models.TextField(null = True)
    createClubRequests=models.TextField(null = True)
    joinClubRequests=models.TextField(null = True)