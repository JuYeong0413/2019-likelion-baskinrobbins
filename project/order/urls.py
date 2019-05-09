from django.urls import path
from . import views

urlpatterns = [
    path('select_container/', views.select_container, name="select_container"),
    path('single_regular/', views.single_regular, name="single_regular"),
    path('single_king/', views.single_king, name="single_king"),
    path('double_junior/', views.double_junior, name="double_junior"),
    path('double_regular/', views.double_regular, name="double_regular"),
    path('pint/', views.pint, name="pint"),
    path('quart/', views.quart, name="quart"),
    path('family/', views.family, name="family"),
    path('half_gallon/', views.half_gallon, name="half_gallon"),
    path('recommendation/', views.recommendation, name="recommendation"),
]