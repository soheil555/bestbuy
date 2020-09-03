from django.db import models
from products.models import Product
from django.contrib.auth.models import User

# Create your models here.
class Cart(models.Model):
    user        = models.ForeignKey(User,null=True,blank=True,on_delete=models.CASCADE)
    products    = models.ManyToManyField(Product,blank=True)
    total       = models.DecimalField(max_digits=10,decimal_places=2,default=0.00)
    timestamp   = models.DateTimeField(auto_now_add=True)
    updated     = models.DateTimeField(auto_now=True)
    active      = models.BooleanField(default=True)

    def __str__(self):
        return f"{self.id}--{self.user.username}"