# coding: utf-8
from django.template.response import TemplateResponse


def index(request):
    template_name = 'articles/article/index.html'
    return TemplateResponse(
        request, template_name, context=dict(request=request))


def component(request, component):
    template_name = 'bootstrap-vue/{}/index.html'.format(component)
    return TemplateResponse(
        request, template_name, context=dict(request=request))
