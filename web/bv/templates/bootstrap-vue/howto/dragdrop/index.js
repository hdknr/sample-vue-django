Vue.options.delimiters = ['{[{', '}]}'];        // Django テンプレートとバッティングしないように変更
var app = new Vue({
  el: '#app',
  data: {
    callback: function(){},
    drag: null,
    visible: true,
    mediafiles: [
        {id: 0, data: 'test-0'},
        {id: 1, data: 'test-1'},
        {id: 2, data: 'test-2'},
        {id: 3, data: 'test-3'},
        {id: 4, data: 'test-4'},]
  },
  methods: {
      on_dragstart(mediafile,e) {this.drag = mediafile; },
      on_dragenter(mediafile, e){this.dragenter =  mediafile; },
      on_drop(e) {
        this.mediafiles.splice(
            this.dragenter, 0,
            this.mediafiles.splice(this.drag, 1)[0]);
        this.callback();
      },
  }
});
