from django.db import models
from clubs.models import Club

# Create your models here.

class Announcement(models.Model):
    # define department name and description columns, the id column will be added automatically.
    content = models.CharField(max_length=350)
    club = models.ForeignKey(Club, on_delete=models.CASCADE)
    date = models.DateTimeField(auto_now_add = True)

    def __str__(self):
        return str(self.content)