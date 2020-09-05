from django.urls import path,re_path
from .views import *

urlpatterns = [

    path('list/',cart_list_view,name="cart_list_view"),
    path('update/',update_cart_view,name="add_to_cart_view"),

]