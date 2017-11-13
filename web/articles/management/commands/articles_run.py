# -*- coding: utf-8 -*-
import djclick as click
from articles.models import Article
from logging import getLogger
log = getLogger()


@click.group(invoke_without_command=True)
@click.pass_context
def main(ctx):
    pass


@main.command()
@click.option('--path', default='/tmp/gunosy.json')
@click.pass_context
def gunosy(ctx, path):
    '''load test data from gunosy'''
    import json
    for item in json.load(open(path)):
        if 'title' in item and 'text' in item:
            Article.objects.create(title=item['title'], content=item['text'])
