from django.db import models

# Create your models here.
class student(models.Model):
    email=models.EmailField()
    alc_id=models.CharField(max_length=8, primary_key=True, unique=True)

    def __str__(self):
        return self.email   