# Generated by Django 3.2.9 on 2021-12-14 16:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('requests', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='createclubrequest',
            name='student_id',
            field=models.IntegerField(default=2180321),
        ),
        migrations.AlterField(
            model_name='deleteclubrequest',
            name='student_id',
            field=models.IntegerField(default=2180321),
        ),
    ]
