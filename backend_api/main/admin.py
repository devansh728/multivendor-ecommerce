from django.contrib import admin
from . import models
# Register your models here.

admin.site.register(models.Vendor)
admin.site.register(models.Products)
admin.site.register(models.Product_category)
admin.site.register(models.customer)
admin.site.register(models.order)
admin.site.register(models.order_list)
admin.site.register(models.products_images)