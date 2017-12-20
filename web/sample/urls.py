# coding: utf-8
from django.conf.urls import url
from . import views


urlpatterns = [
    url(r'^(?P<id>.+)$', views.detail, name="sample_detail"),
    url(r'^$', views.index, name="sample_index"),
]
