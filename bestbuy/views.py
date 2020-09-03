from django.shortcuts import render


def home_view(request,path):
    return render(request,"home.html",{})