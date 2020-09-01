from django.db import models
from django.db.models.signals import pre_save
from django.dispatch import receiver

from products.models import Product
from products.utils import create_slug

# Create your models here.


class Tag(models.Model):

    title       = models.CharField(max_length=255)
    slug        = models.SlugField(blank=True)
    timestamp   = models.DateTimeField(auto_now_add=True)
    active      = models.BooleanField(default=True)
    products    = models.ManyToManyField(Product,blank=True)


    def __str__(self):
        return self.title 



@receiver(pre_save,sender=Tag)
def set_slug_before_save_tag(sender,instance,**kwargs):
    if not instance.slug:
        instance.slug = create_slug(instance)



