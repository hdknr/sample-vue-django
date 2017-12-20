## vue-cli + yarn

~~~~
$ npm install -g vue-cli
$ npm install -g yarn
~~~~

## sample django app + vue app in the same directory
~~~bash
$ python manage.py startapp sample
$ vue init webpack-simple sample
~~~

## npm packages

~~~bash
$ cd sample
$ npm install
~~~

check working:

~~~bash
$ vim packages.json
$ npm run dev
~~~

~~~bash
$ curl http://192.168.53.3:8080
~~~

## modules.json: moduels directory resolution

~~~bash
$ python ../manage.py djvue modules_json
$ cat modules.json

["node_modules", "src", "/vagrant/projects/sample-vue-django/web/djvue/vue"]
~~~


~~~bash
$ vim webpack.config.js  
~~~

~~~js
...
var modules = require('./modules.json')
...

module.exports = {
  output: {
    path: path.resolve(__dirname, './static/sample/bundles/'),
    publicPath: '/static/sample/bundles',
    ...
  },
  ....
  resolve: {
    ...
    modules: modules,
    ...
  },  
  ...
}
~~~

## static url of image file

~~~bash
$ vi  src/App.vue
~~~

djangoMiinx( in django.js):

~~~js
import {djangoMixin} from 'django'

export default {
  name: 'app',
  mixins: [djangoMixin],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
~~~

mixin `static_url` method:

~~~html
<img :src="static_url('sample/bundles/logo.png')">
~~~

~~~bash
$ webpack --config webpack.config.js
~~~

## bootstrap-vue.js


~~~bash
$ yarn add bootstrap-vue bootstrap@4.0.0-beta.2
$ vim src/main.js
~~~

~~~js
import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);

new Vue({
  el: '#app',
  render: h => h(App)
})
~~~

~~~bash
$ webpack --config webpack.config.js
~~~
