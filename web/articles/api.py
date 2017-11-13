from django.conf.urls import include, url
from rest_framework import routers
from .viewsets import ArticleViewSet

router = routers.DefaultRouter()
router.register(r'articles', ArticleViewSet)

urlpatterns = [
    url(r'', include(router.urls)),
]
