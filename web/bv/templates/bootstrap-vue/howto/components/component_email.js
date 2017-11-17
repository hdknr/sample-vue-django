var EmailComponent = Vue.extend({
    template: '#component-email-template',
    props: ['item'],
    data(){
        return{
            email: null,
        }
    },
});
