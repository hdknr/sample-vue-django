# coding: utf-8
from django.template.response import TemplateResponse


def index(request):
    template_name = 'articles/article/index.html'
    return TemplateResponse(
        request, template_name, context=dict(request=request))
