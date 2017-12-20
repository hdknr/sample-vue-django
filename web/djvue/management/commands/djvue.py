from django.apps import apps
import djclick as click
from logging import getLogger
import os
import json
log = getLogger()


@click.group(invoke_without_command=True)
@click.pass_context
def main(ctx):
    pass


@main.command()
@click.pass_context
def modules_json(ctx):
    ''' Generate modules.json'''
    modules = ["node_modules", "src"]
    for conf in apps.get_app_configs():
        path = os.path.join(conf.path, 'vue')
        if os.path.isdir(path):
            modules.append(path)
    open('modules.json', 'w').write(json.dumps(modules))
