from django.db import models

# Create your models here.

class Product(models.Model):
    title           = models.CharField(max_length=255)
    detail          = models.TextField()
    price           = models.DecimalField(decimal_places=2,max_digits=5)

    #TODO: implement images and slug fields

    #images          = models.ImageField()
    #slug            = models.SlugField()

    def __str__(self):
        return self.title
