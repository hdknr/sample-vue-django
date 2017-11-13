# -*- coding: utf-8 -*-

# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: http://doc.scrapy.org/en/latest/topics/item-pipeline.html


class GunosynewsPipeline(object):
    def process_item(self, item, spider):
        text = item.get('text', '')
        if text:
            text = u"\n".join([i for i in text.split('\n') if i][5:])
            item['text'] = text
        return item
