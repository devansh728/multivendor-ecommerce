# Generated by Django 5.1.4 on 2025-01-21 19:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0004_products_images'),
    ]

    operations = [
        migrations.AlterField(
            model_name='products_images',
            name='products_images',
            field=models.ImageField(upload_to='prod_img/'),
        ),
    ]
