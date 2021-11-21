from django.db import models

# Create your models here.
class Account(models.Model):
    id = models.TextField(primary_key=True)
    studentId = models.TextField()
    name = models.TextField()
    surname = models.TextField()
    email = models.TextField()
    password = models.TextField()
    repeatPassword = models.TextField()