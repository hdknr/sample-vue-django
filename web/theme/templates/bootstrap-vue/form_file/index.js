Vue.options.delimiters = ['{[{', '}]}'];        // Django テンプレートとバッティングしないように変更
var app = new Vue({
  el: '#app',
  data: {
    file: null, file2:null,
    files: [], merged: []
  },
  methods: {
    removeItem(file){
        this.merged = this.merged.filter(item => item !== file);
    },
    clearFiles() {
        this.$refs.fileinput.reset();
        this.merged = [];
    }
  },
  watch: {
      files: function(val, old){
          this.merged = this.merged.concat(val);
      },
  }
});
