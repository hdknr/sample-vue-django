Vue.options.delimiters = ['{[{', '}]}'];        // Django テンプレートとバッティングしないように変更
var app = new Vue({
  el: '#app',
  data: {
    form_group_state: "New",
    form_group_feedback: false,
    default_status : false,
    status: 'not_accepted',
    selected: [], // Must be an array reference!
     options: [
       {text: 'Orange', value: 'orange'},
       {text: 'Apple', value: 'apple'},
       {text: 'Pineapple', value: 'pineapple'},
       {text: 'Grape', value: 'grape'}
     ],
     checked: true, indeterminate: true,
     flavours: ['Orange', 'Grape', 'Apple', 'Lime', 'Very Berry'],
     tri_selected: [],
     allSelected: false,
     indeterminate: false
  },
  methods: {
      toggleIndeterminate() {
          this.indeterminate = !this.indeterminate;
      },
      toggleAll(checked) {
        this.tri_selected = checked ? this.flavours.slice() : [];
      }
    },
    watch: {
          selected(newVal, oldVal) {
              // Handle changes in individual flavour checkboxes
              if (newVal.length === 0) {
                  this.indeterminate = false;
                  this.allSelected = false;
              } else if (newVal.length === this.flavours.length) {
                  this.indeterminate = false;
                  this.allSelected = true;
              } else {
                  this.indeterminate = true;
                  this.allSelected = false;
              }
          }
      }
});
