# Generated by Django 3.2.9 on 2021-11-20 12:14

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0010_alter_account_student_id'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='account',
            options={},
        ),
        migrations.AlterModelManagers(
            name='account',
            managers=[
            ],
        ),
        migrations.AlterModelTable(
            name='account',
            table='accounts',
        ),
    ]
