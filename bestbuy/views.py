from django.shortcuts import render
from cart.models import Cart


def home_view(request,path):
    
    cart_obj,new_obj = Cart.objects.new_or_get(request)
    context = {"cart_id":cart_obj.id}

    return render(request,"home.html",context)