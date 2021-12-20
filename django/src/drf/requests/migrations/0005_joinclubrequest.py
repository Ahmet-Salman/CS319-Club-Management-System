# Generated by Django 3.2.9 on 2021-12-20 09:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('requests', '0004_auto_20211215_1344'),
    ]

    operations = [
        migrations.CreateModel(
            name='JoinClubRequest',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('timeStamp', models.CharField(default=' ', max_length=1000)),
                ('user_id', models.IntegerField()),
                ('status', models.CharField(default='', max_length=1000)),
                ('date', models.DateTimeField(auto_now_add=True)),
                ('clubId', models.CharField(max_length=1000)),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
