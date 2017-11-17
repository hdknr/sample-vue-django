var NameComponent = Vue.extend({
    template: '#component-name-template',
    props: ['item'],
    data(){
        return{
            family_name: null,
            first_name: null
        }
    },
});
