export var djangoMixin = {
  data(){
    return {
      env: window.Django,
    }
  },
  methods:{
      static_url(url){
          return this.env.static_base + url;
      },
  }
}
