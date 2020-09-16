from django.db import models
from products.models import Product
from django.contrib.auth.models import User
from django.db.models.signals import pre_save,m2m_changed
from django.dispatch import receiver

# Create your models here.


class CartManager(models.Manager):
    def new_or_get(self,request):
        cart_id = request.session.get("cart_id",None)
        qs = self.get_queryset().filter(id=cart_id)
        new_obj = True

        if qs.count() == 1:
            new_obj = False
            cart_obj = qs.first()
            if request.user.is_authenticated and cart_obj.user is None:
                cart_obj.user = request.user
                cart_obj.save()
        else:
            cart_obj = Cart.objects.new(user=request.user)
            request.session['cart_id'] = cart_obj.id

        return cart_obj,new_obj

    def new(self,user):
        user_obj = None

        if user is not None:
            if user.is_authenticated:
                user_obj = user
                
        return self.model.objects.create(user=user_obj)




class Cart(models.Model):
    user        = models.ForeignKey(User,null=True,blank=True,on_delete=models.CASCADE)
    products    = models.ManyToManyField(Product,blank=True)
    sub_total   = models.DecimalField(max_digits=10,decimal_places=2,default=0.00)
    total       = models.DecimalField(max_digits=10,decimal_places=2,default=0.00)
    timestamp   = models.DateTimeField(auto_now_add=True)
    updated     = models.DateTimeField(auto_now=True)
    active      = models.BooleanField(default=True)

    objects     = CartManager()

    def __str__(self):
        return f"{self.id}"



    
@receiver(m2m_changed,sender=Cart.products.through)
def cal_sub_total_after_update_cart(sender,instance,action,*args,**kwargs):
    if action == "post_add" or action == "post_remove" or action == "post_clear":
        products = instance.products.all()

        total = 0
        for product in products:
            total += product.price

        if instance.sub_total != total:
            instance.sub_total = total
            instance.save



@receiver(pre_save,sender=Cart)
def set_total_after_cart_update(sender,instance,*args,**kwargs):
    instance.total = instance.sub_total + 10
