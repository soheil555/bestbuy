from rest_framework.decorators import api_view
from rest_framework.response import Response


from ..models import Product
from .serializers import ProductSerializer


@api_view(['GET'])
def products_list_view(request):
    qs = Product.objects.all()
    serializer = ProductSerializer(qs,many=True)
    return Response(serializer.data,status=200)


@api_view(['GET'])
def product_detail_view(request,id):
    try:
        obj = Product.objects.get(id=id)
    except:
        return Response({},status=404)

    serializer = ProductSerializer(obj)
    return Response(serializer.data,status=200)