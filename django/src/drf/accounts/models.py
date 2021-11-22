from django.db import models

# Create your models here.
from django.contrib.auth.models import AbstractUser
from .account_manager import MyAccountManager

class Account(AbstractUser):
    # define department name and description columns, the id column will be added automatically.
    student_id = models.IntegerField(unique=True)
    is_club_manager = models.BooleanField(default = False)
    username = None

    USERNAME_FIELD = 'student_id'
    REQUIRED_FIELDS = []
    objects = MyAccountManager()

    class Meta:
        db_table = "accounts"

    def __str__(self):
        return str(self.student_id)

    def has_perm(self, perm, obj=None): return self.is_superuser
    def has_module_perms(self, app_label): return self.is_superuser