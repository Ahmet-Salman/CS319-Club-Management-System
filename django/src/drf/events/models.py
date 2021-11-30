from django.db import models
from clubs.models import Club

# Create your models here.

class Event(models.Model):
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=100)
    location = models.CharField(max_length=100)
    date = models.DateTimeField(auto_now_add = True)
    club = models.ForeignKey(Club, on_delete=models.CASCADE)

    def __str__(self):
        return str(self.id)