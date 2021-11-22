
from django.contrib.auth.base_user import BaseUserManager

class MyAccountManager(BaseUserManager):
    def create_user(self, student_id, password=None):
        if not student_id:
            raise ValueError('Users must have an student id')

        user = self.model(
            student_id=student_id,
        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, student_id, password):
        user = self.create_user(
            student_id=student_id,
            password=password,
        )
        user.is_active=True
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)