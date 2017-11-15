# coding: utf-8
from django.template.response import TemplateResponse


def index(request):
    template_name = 'bootstrap-vue/home/index.html'
    return TemplateResponse(
        request, template_name, context=dict(request=request))


def component(request, component):
    template_name = 'bootstrap-vue/{}/index.html'.format(component)
    return TemplateResponse(
        request, template_name, context=dict(request=request))


def howto(request, name):
    template_name = 'bootstrap-vue/howto/{}/index.html'.format(name)
    return TemplateResponse(
        request, template_name, context=dict(request=request))
