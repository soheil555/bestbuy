from django.urls import path
from .views import *

urlpatterns = [

    path('list/',products_list_view,name="list_view"),
    path('detail/<str:slug>/',product_detail_view,name="detail_view"),

]