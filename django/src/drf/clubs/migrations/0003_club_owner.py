# Generated by Django 3.2.9 on 2021-11-22 07:53

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('clubs', '0002_club_is_active'),
    ]

    operations = [
        migrations.AddField(
            model_name='club',
            name='owner',
            field=models.OneToOneField(default=1, on_delete=django.db.models.deletion.CASCADE, to='accounts.account'),
            preserve_default=False,
        ),
    ]