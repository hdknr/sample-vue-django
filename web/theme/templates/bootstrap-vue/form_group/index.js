Vue.options.delimiters = ['{[{', '}]}'];        // Django テンプレートとバッティングしないように変更
var app = new Vue({
  el: '#app',
  methods: {
  },
  computed: {
    feedback() {
      return this.name.length > 0 ? '最低４文字入力してください' : '入力してください';
    },
    state() {
      return this.name.length > 4 ? 'valid' : 'invalid';
    }
  },
  data: {
    name: '',
  }
});
