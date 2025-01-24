from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class Vendor(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE) # cascade simply means if we delete user table thhe attached user column also deletes.
    address = models.TextField(null=True)

    def __str__(self):
        return self.user.username

class Product_category(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField(null=True)

    def __str__(self):
        return self.title
    
class Products(models.Model):
    category = models.ForeignKey(Product_category,on_delete=models.SET_NULL,null =True)
    vendor = models.ForeignKey(Vendor,on_delete=models.SET_NULL,null =True)
    price = models.FloatField()
    title = models.CharField(max_length=200)
    description = models.TextField(null=True)

    def __str__(self):
        return self.title

#customer model
class customer(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    mobile_no = models.PositiveIntegerField()

    def __str__(self):
        return self.user.username
    
class order(models.Model):
    customer = models.ForeignKey(customer,on_delete=models.CASCADE)
    order_time = models.DateTimeField(auto_now_add=True)

    
class order_list(models.Model):
    order = models.ForeignKey(order,on_delete=models.CASCADE)
    Products = models.ForeignKey(Products,on_delete=models.CASCADE)

    def __str__(self):
        return self.Products.title
    
class products_images(models.Model):
    product = models.ForeignKey(Products,on_delete=models.CASCADE,related_name='product')
    products_images = models.ImageField(upload_to='prod_img/')

    def __str__(self):
        return self.products_images.url