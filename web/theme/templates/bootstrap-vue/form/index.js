Vue.options.delimiters = ['{[{', '}]}'];        // Django テンプレートとバッティングしないように変更
var app = new Vue({
  el: '#app',
  data: {
     form: {
       email: '',
       name: '',
       food: null,
       checked: false,
       secret: 'S3CR3T'
     },
     foods: [
       { text:'Select One', value:null },
       'Carrots','Beans','Tomatoes','Corn'
     ]
   },
   methods: {
     onSubmit(evt) {
       evt.preventDefault();
       alert(JSON.stringify(this.form));
     }
   }
});
