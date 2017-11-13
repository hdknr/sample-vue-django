Vue.options.delimiters = ['{[{', '}]}'];        // Django テンプレートとバッティングしないように変更
var app = new Vue({
  el: '#app',
  data: {
     items: [{
       text: 'Admin', href: '#',
     }, {
       text: 'Manage', href: '#',
     }, {
       text: 'Library', active: true
     }],
     items2: [{
       text: 'Admin2', href: '#',
     }, {
       text: 'Manage2', href: '#',
     }, {
       text: 'Library2', active: true
     }]
   },
  methods: {
  }
});
