var app = new Vue({
  el: '#app',
  data: {
    profiles: [
        {attr: 'c-name',   label: 'Full Name'},
        {attr: 'c-location', label: 'Home Address'},
        {attr: 'c-location', label: 'Office Address'},
        {attr: 'c-email', label: 'Home Email'},
        {attr: 'c-email', label: 'Mobile Email'},
        {attr: 'c-email', label: 'Office Email'},
        {attr: 'c-phone', label: 'Mobile Email'},
        {attr: 'c-phone', label: 'Office Email'},
    ]
  },
  methods :{
      add_item(attr, label){
          this.profiles.push({attr: attr, label: label});
      }
  },
  components:{
      "c-email": EmailComponent,
      "c-location": LocationComponent,
      "c-name": NameComponent,
      "c-phone": PhoneComponent,
  }
});
