from . import models
from rest_framework import serializers

class Vendorserializer(serializers.ModelSerializer):
    class Meta:
        model = models.Vendor
        fields = '__all__' 
        depth =1

class Vendordetailserializer(serializers.ModelSerializer):
    class Meta:
        model = models.Vendor
        fields = '__all__' 
        depth =1

class Productlistserializer(serializers.ModelSerializer):
    class Meta:
        model = models.Products
        fields = '__all__' 
        depth =1

class Productdetailserializer(serializers.ModelSerializer):
    product = serializers.StringRelatedField(many=True, read_only = True)
    class Meta:
        model = models.Products
        fields = ['id','category','vendor','title','description','price','product']
        depth =1

class Customerserializer(serializers.ModelSerializer):
    class Meta:
        model = models.customer
        fields = '__all__' 
        depth =1

class Customerdetailserializer(serializers.ModelSerializer):
    class Meta:
        model = models.customer
        fields = '__all__' 
        depth =1

class Orderserializer(serializers.ModelSerializer):
    class Meta:
        model = models.order
        fields = '__all__' 
        depth =1

class Orderdetailserializer(serializers.ModelSerializer):
    class Meta:
        model = models.order_list
        fields = '__all__' 
        depth =1

class Productcategoryserializer(serializers.ModelSerializer):
    class Meta:
        model = models.Product_category
        fields = '__all__' 
        depth =1

class Productcategorydetailserializer(serializers.ModelSerializer):
    class Meta:
        model = models.Product_category
        fields = '__all__' 
        depth =1