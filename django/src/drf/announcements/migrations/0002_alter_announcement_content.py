# Generated by Django 3.2.9 on 2021-12-21 14:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('announcements', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='announcement',
            name='content',
            field=models.CharField(max_length=350),
        ),
    ]
