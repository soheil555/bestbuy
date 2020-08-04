from django.utils.text import slugify
from string import ascii_letters,digits
import random



def random_chars(length=4):
    return ''.join(random.choice(ascii_letters+digits) for _ in range(length))



def create_slug(instance,slug=None):
    Product = instance.__class__
    if not slug:
        new_slug = slugify(instance.title)
        return create_slug(instance,slug=new_slug)

    qs = Product.objects.filter(slug=slug)
    if qs.exists():
        rands = random_chars()
        new_slug = f'{slug}-{rands}'
        return create_slug(instance,slug=new_slug)

    return slug