# Generated by Django 3.1.1 on 2020-09-26 17:03

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='student',
            fields=[
                ('email', models.EmailField(max_length=254)),
                ('alc_id', models.CharField(max_length=8, primary_key=True, serialize=False, unique=True)),
            ],
        ),
    ]
