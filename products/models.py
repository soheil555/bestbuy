from django.db import models
from django.db.models import Q
from django.dispatch import receiver
from django.db.models.signals import pre_save

# Create your models here.
class ProductQuerySet(models.QuerySet):
    def search(self,name):
        return self.filter( 
            (
            Q(title__icontains=name)|
            Q(detail__icontains=name)
            )

        ).distinct()


class ProductManager(models.Manager):
    def get_queryset(self):
        return ProductQuerySet(self.model, using=self._db)

    def search(self,name):
        return self.get_queryset().search(name)

class Product(models.Model):
    title           = models.CharField(max_length=255)
    detail          = models.TextField()
    price           = models.DecimalField(decimal_places=2,max_digits=5)
    image           = models.ImageField(upload_to='photos/',null=True,blank=True)
    slug            = models.SlugField(null=True)


    objects = ProductManager()

    def __str__(self):
        return self.title



@receiver(pre_save,sender=Product)
def set_slug_before_create_product(sender,instance,created,**kwargs):
    pass