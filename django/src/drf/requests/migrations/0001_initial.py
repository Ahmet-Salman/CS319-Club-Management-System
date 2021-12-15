# Generated by Django 3.2.9 on 2021-12-14 16:43

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='CreateClubRequest',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('timeStamp', models.CharField(default=' ', max_length=1000)),
                ('student_id', models.IntegerField(default=12)),
                ('status', models.CharField(default='', max_length=1000)),
                ('date', models.DateTimeField(auto_now_add=True)),
                ('clubName', models.CharField(default='', max_length=1000)),
                ('clubDescription', models.CharField(default='', max_length=1000)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='DeleteClubRequest',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('timeStamp', models.CharField(default=' ', max_length=1000)),
                ('student_id', models.IntegerField(default=12)),
                ('status', models.CharField(default='', max_length=1000)),
                ('date', models.DateTimeField(auto_now_add=True)),
                ('clubId', models.CharField(max_length=1000)),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
