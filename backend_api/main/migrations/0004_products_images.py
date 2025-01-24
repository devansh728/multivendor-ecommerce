# Generated by Django 5.1.4 on 2025-01-21 19:12

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0003_products_category_products_vendor_customer_order_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='products_images',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('products_images', models.ImageField(upload_to='prod_img')),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='product', to='main.products')),
            ],
        ),
    ]
