from django.db import models
from accounts.models import Account

# Create your models here.

class Club(models.Model):
    # define department name and description columns, the id column will be added automatically.
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=1000, default="Awesome club")
    is_active = models.BooleanField(default=True)
    owner = models.OneToOneField(Account, on_delete=models.CASCADE)

    def __str__(self):
        return str(self.name)