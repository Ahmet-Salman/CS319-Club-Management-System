# Generated by Django 3.2.9 on 2021-11-23 13:24

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Request',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('timeStamp', models.CharField(default='Awesome club', max_length=1000)),
                ('status', models.CharField(default='Awesome club', max_length=1000)),
                ('owner', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='CreateClubRequest',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('clubName', models.CharField(default='Awesome club', max_length=1000)),
                ('clubDescription', models.CharField(default='Awesome club', max_length=1000)),
                ('request', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='requests.request')),
            ],
        ),
    ]
