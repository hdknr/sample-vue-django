Vue.options.delimiters = ['{[{', '}]}'];        // Django テンプレートとバッティングしないように変更

var Child = Vue.extend({
  template: '#emit-child-template',
  mounted(){
      console.log('Child is mouned....');
  },
  methods: {
      showModal() {
          this.$root.$emit('bv::show::modal','dialog1');
      },
      hideModal() {
          this.$root.$emit('bv::hide::modal','dialog1');
      },
      onHidden(evt) {
        // ref=btnShow ボタンにフォーカスを戻す
        this.$refs.btnShow.focus();
      }
  }
});

var app = new Vue({
  el: '#app',
  components: {
      'modal-child': Child
  },
  data: {
    modalShow: false,
    name: '', names: [],      // for gate samle
    variants_show: false,
    variants: [
      'primary','secondary','success','warning','danger','info','light','dark'
    ],
    headerBgVariant: 'dark',
    headerTextVariant: 'light',
    bodyBgVariant: 'light',
    bodyTextVariant: 'dark',
    footerBgVariant: 'warning',
    footerTextVariant: 'dark'
  },
  created(){
      var vm = this;
      this.$on('bv::show::modal',function(dlg){
          /// vm.$refs[dlg].data['modalShow'] = true;
          console.log("dialog is opening...");
      });
      this.$on('bv::hide::modal',function(dlg){
          console.log("dialog is closed...");
      });
  },
  methods: {
      showModal() {
          this.$refs.myModalRef.show();
      },
      hideModal() {
          this.$refs.myModalRef.hide();
      },
      clearName() {
          this.name = '';
      },
      setFocus(){
          this.$refs.yourName.focus();
      },
      onShown(e){
          this.clearName();
          this.setFocus();
      },
      handleOk(evt) {
         // Prevent modal from closing
         evt.preventDefault();
         if (!this.name) {
           alert('Please enter your name');
         } else {
           this.handleSubmit()
         }
      },
      handleSubmit() {
         this.names.push(this.name);
         this.clearName();
         this.$refs.modal.hide();
      }
  }
});
