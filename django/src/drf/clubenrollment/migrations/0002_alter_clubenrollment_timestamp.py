# Generated by Django 3.2.9 on 2021-12-24 05:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('clubenrollment', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='clubenrollment',
            name='timeStamp',
            field=models.DateTimeField(auto_now_add=True),
        ),
    ]
