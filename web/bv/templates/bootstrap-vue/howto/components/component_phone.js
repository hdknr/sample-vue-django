var PhoneComponent = Vue.extend({
    template: '#component-phone-template',
    props: ['item'],
    data(){
        return{
            phone: null,
        }
    },
});
