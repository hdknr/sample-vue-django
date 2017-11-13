Vue.options.delimiters = ['{[{', '}]}'];        // Django テンプレートとバッティングしないように変更
var app = new Vue({
  el: '#app',
  data: {
       currentPage: 3,
       totalRows: 100,
       perPage: 10
  },
  methods: {
  }
});
