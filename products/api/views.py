from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import Http404

from ..models import Product
from .serializers import ProductSerializer


@api_view(['GET'])
def products_list_view(request):
    qs = Product.objects.all()
    s = request.GET.get("s",None)
    if s is not None:
        qs = qs.search(s)

    serializer = ProductSerializer(qs,many=True)
    return Response(serializer.data,status=200)


@api_view(['GET'])
def product_detail_view(request,slug):
    try:
        obj = Product.objects.get(slug=slug)
    except:
        return Response({},status=404)

    serializer = ProductSerializer(obj)
    return Response(serializer.data,status=200)


def not_found_view(request,path):
    raise Http404()
