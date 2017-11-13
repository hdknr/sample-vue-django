# coding: utf-8
from django.conf.urls import url
from . import views


urlpatterns = [
    url(r'(?P<component>.+)', views.component, name="vue_component"),
    url(r'^$', views.index),
]
