# Generated by Django 3.2.9 on 2021-12-14 16:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('requests', '0002_auto_20211214_1650'),
    ]

    operations = [
        migrations.AlterField(
            model_name='createclubrequest',
            name='student_id',
            field=models.IntegerField(),
        ),
        migrations.AlterField(
            model_name='deleteclubrequest',
            name='student_id',
            field=models.IntegerField(),
        ),
    ]