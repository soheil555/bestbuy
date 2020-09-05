from rest_framework.decorators import api_view
from rest_framework.response import Response

from cart.models import Cart


@api_view(['GET'])
def cart_list_view(request):
    context = {"cart_id":request.session.get('cart_id')}
    return Response(context,status=200)