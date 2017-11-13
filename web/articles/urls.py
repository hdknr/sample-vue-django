# coding: utf-8
from django.conf.urls import url, include
from . import views


urlpatterns = [
    url(r'^api/', include('articles.api')),
    url(r'^webpack_sample', views.webpack_sample),
    url(r'^$', views.index),
]
