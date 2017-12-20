import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import {djangoMixin} from 'django'

Vue.options.delimiters = ['{[{', '}]}'];        // Django テンプレートとバッティングしないように変更
Vue.use(BootstrapVue);

export var app = new Vue({
  el: '#app',
  data: {
    instance: { id: 3, title: "Sample Title", }
  },
});
