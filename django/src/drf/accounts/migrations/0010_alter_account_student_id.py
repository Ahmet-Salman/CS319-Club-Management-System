# Generated by Django 3.2.9 on 2021-11-19 23:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0009_alter_account_student_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='account',
            name='student_id',
            field=models.IntegerField(unique=True),
        ),
    ]