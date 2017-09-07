// https://jp.vuejs.org/v2/guide/#宣言的レンダリング
Vue.options.delimiters = ['{[{', '}]}'];        // Django テンプレートとバッティングしないように変更
Vue.component('article-item',{
    props: ['article'],
    template: '#article-template'})

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    enabled: false,
    todos: [
     { text: 'Learn JavaScript' },
     { text: 'Learn Vue' },
     { text: 'Build something awesome' }
   ],
   articles: [
     {content: 'content #1', id:1 },
     {content: 'content #2', id:2 },
     {content: 'content #3', id:3 }
   ]
 },
 methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
});
