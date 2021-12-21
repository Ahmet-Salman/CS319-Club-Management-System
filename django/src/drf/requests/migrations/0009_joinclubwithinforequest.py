# Generated by Django 3.2.9 on 2021-12-21 15:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('requests', '0008_auto_20211221_1524'),
    ]

    operations = [
        migrations.CreateModel(
            name='JoinClubWithInfoRequest',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('timeStamp', models.CharField(max_length=1000)),
                ('user_id', models.IntegerField()),
                ('status', models.CharField(max_length=1000)),
                ('date', models.DateTimeField(auto_now_add=True)),
                ('club_id', models.CharField(max_length=1000)),
                ('name', models.CharField(max_length=1000)),
                ('surname', models.CharField(max_length=1000)),
                ('email', models.CharField(max_length=1000)),
            ],
            options={
                'abstract': False,
            },
        ),
    ]