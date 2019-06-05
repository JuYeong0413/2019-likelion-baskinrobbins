from django.urls import path
from . import views

urlpatterns = [
    path('order/', views.order, name="order"),
    path('flavor_of_the_month/', views.flavor_of_the_month, name="flavor_of_the_month"),
    path('complete/', views.complete, name="complete"),
    path('show_list/', views.show_list, name="show_list"),
]