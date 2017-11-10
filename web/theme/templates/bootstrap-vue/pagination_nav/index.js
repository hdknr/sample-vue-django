Vue.options.delimiters = ['{[{', '}]}'];        // Django テンプレートとバッティングしないように変更
var app = new Vue({
  el: '#app',
  data: {
       currentPage: 3,
       totalRows: 100,
       perPage: 10,

       currentPageNum: 1,
       links: ['#foo','#bar', '#baz', '#faz']
  },
  computed: {
    pageLinkNum() {
      return this.linkGenNum(this.currentPage);
    }
  },
  methods: {
    linkGen(pageNum) {
           return '#page/' + pageNum + '/foobar';
    },
    linkGenNum(pageNum) {
     return this.links[pageNum - 1];
   },
   pageGenNum(pageNum) {
     return this.links[pageNum - 1].slice(1);
   }
  }
});
