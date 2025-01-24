from django.shortcuts import render
from . import serializer
from rest_framework import generics,permissions
from . import models
# Create your views here.

class Vendorlist(generics.ListCreateAPIView):
    queryset = models.Vendor.objects.all()
    serializer_class = serializer.Vendorserializer
    # permission_classes = [permissions.AllowAny]

class Vendordetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Vendor.objects.all()
    serializer_class = serializer.Vendordetailserializer

class Productlist(generics.ListCreateAPIView):
    queryset = models.Products.objects.all()
    serializer_class = serializer.Productlistserializer

    def get_queryset(self):
        qs = super().get_queryset()
        category_id = self.request.GET.get('category', None)  # Use .get() to avoid errors
        if category_id:
            try:
                category = models.Product_category.objects.get(id=category_id)
                qs = qs.filter(category=category)
            except models.Product_category.DoesNotExist:
                qs = qs.none()  # Return empty queryset if category does not exist
        return qs


class Productdetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Products.objects.all()
    serializer_class = serializer.Productdetailserializer

class Customerlist(generics.ListCreateAPIView):
    queryset = models.customer.objects.all()
    serializer_class = serializer.Customerserializer
    # permission_classes = [permissions.AllowAny]

class Customerdetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.customer.objects.all()
    serializer_class = serializer.Customerdetailserializer

class Orderlist(generics.ListCreateAPIView):
    queryset = models.order.objects.all()
    serializer_class = serializer.Orderserializer
    # permission_classes = [permissions.AllowAny]

class Orderdetail(generics.ListAPIView):
    # queryset = models.order_list.objects.all()
    serializer_class = serializer.Orderdetailserializer

    def get_queryset(self):
        id = self.kwargs['pk']
        order = models.order.objects.get(id = id)
        order_items = models.order_list.objects.filter(order=order)
        return order_items
    
class Categorylist(generics.ListCreateAPIView):
    queryset = models.Product_category.objects.all()
    serializer_class = serializer.Productcategoryserializer
    # permission_classes = [permissions.AllowAny]

class Categorydetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Product_category.objects.all()
    serializer_class = serializer.Productcategorydetailserializer
