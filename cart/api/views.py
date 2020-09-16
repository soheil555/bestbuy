from rest_framework.decorators import api_view
from rest_framework.response import Response
from products.api.serializers import ProductSerializer
from cart.models import Cart
from products.models import Product


@api_view(['GET'])
def cart_list_view(request):
    cart_obj,new_obj = Cart.objects.new_or_get(request)
    products = cart_obj.products

    serializer = ProductSerializer(products,many=True)
    return Response(serializer.data,status=200)



@api_view(['GET'])
def update_cart_view(request):
    cart_obj,new_obj = Cart.objects.new_or_get(request)
    product_id = request.GET.get("p_id")

    
    try:
        product = Product.objects.get(id=product_id)
        if product in cart_obj.products.all():
            cart_obj.products.remove(product)
            action = "remove"
        else:
            cart_obj.products.add(product)
            action = "add"

        return Response({"action":action},status=200)
    except Exception as e:
        print(e)
        return Response({},status=400)


