# -*- coding: utf-8 -*-
import scrapy
from bs4 import BeautifulSoup as Soup
from gunosynews.items import GunosynewsItem


class GunosySpider(scrapy.Spider):
    name = "gunosy"
    allowed_domains = ["gunosy.com"]
    start_urls = [
        'https://gunosy.com/categories/1',  # エンタメ
        'https://gunosy.com/categories/2',  # スポーツ
        'https://gunosy.com/categories/3',  # おもしろ
        'https://gunosy.com/categories/4',  # 国内
        'https://gunosy.com/categories/5',  # 海外
        'https://gunosy.com/categories/6',  # コラム
        'https://gunosy.com/categories/7',  # IT・科学
        'https://gunosy.com/categories/8',  # グルメ
    ]

    def parse(self, response):
        for sel in response.css("div.list_content"):
            article = GunosynewsItem()
            article['title'] = sel.css("div.list_title > a::text").extract_first()          # NOQA
            article['url'] = sel.css("div.list_title > a::attr('href')").extract_first()    # NOQA
            article['subcategory'] = sel.css("div.list_text > a::text").extract_first()     # NOQA

            request = scrapy.Request(article['url'], callback=self.parse_child)
            request.meta['article'] = article
            yield request

            yield article

        next_page = response.css("div.page-link-option > a::attr('href')")
        if next_page:
            url = response.urljoin(next_page[0].extract())
            yield scrapy.Request(url, callback=self.parse)

    def parse_child(self, response):
        article = response.meta["article"]
        soup = Soup(response.body, "html.parser")
        [s.extract() for s
         in soup(['style', 'script', '[document]', 'head', 'title'])]
        article['text'] = soup.getText()
        return article
