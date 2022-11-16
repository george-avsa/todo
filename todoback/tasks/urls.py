from django.urls import path

from . import views

urlpatterns = [
    path('', views.getTasks, name='index'),
    path('<str:timestamp>', views.getTask, name='index'),
]