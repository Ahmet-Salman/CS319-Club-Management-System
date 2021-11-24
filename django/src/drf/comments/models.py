from django.db import models
from clubs.models import Club
from accounts.models import Account

# Create your models here.

class Comment(models.Model):
    content = models.CharField(max_length=100)
    date = models.DateTimeField(auto_now_add = True)
    owner = models.ForeignKey(Account, on_delete=models.CASCADE, default=None)
    club = models.ForeignKey(Club, on_delete=models.CASCADE)

    def __str__(self):
        return str(self.content)