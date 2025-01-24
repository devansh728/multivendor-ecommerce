from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static
urlpatterns = [
    path('vendors/', views.Vendorlist.as_view() ),
    path('vendor/<int:pk>', views.Vendordetail.as_view()),
    path('products/', views.Productlist.as_view() ),
    path('product/<int:pk>', views.Productdetail.as_view()),
    path('customers/', views.Customerlist.as_view() ),
    path('customer/<int:pk>', views.Productdetail.as_view()),
    path('orders/', views.Orderlist.as_view() ),
    path('order/<int:pk>', views.Orderdetail.as_view()),
    path('categories/', views.Categorylist.as_view() ),
    path('categories/<int:pk>', views.Categorydetail.as_view()),
]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)