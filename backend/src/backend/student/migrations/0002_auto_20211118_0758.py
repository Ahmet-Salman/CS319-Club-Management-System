# Generated by Django 3.2.9 on 2021-11-18 07:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('student', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='student',
            name='clubEnrollments',
            field=models.TextField(null=True),
        ),
        migrations.AddField(
            model_name='student',
            name='createClubRequests',
            field=models.TextField(null=True),
        ),
        migrations.AddField(
            model_name='student',
            name='department',
            field=models.TextField(null=True),
        ),
        migrations.AddField(
            model_name='student',
            name='joinClubRequests',
            field=models.TextField(null=True),
        ),
    ]
