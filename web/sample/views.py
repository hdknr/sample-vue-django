from django.template.response import TemplateResponse


def index(request):
    template_name = 'sample/index.html'
    return TemplateResponse(
        request, template_name, context=dict(request=request))
