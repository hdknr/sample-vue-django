var LocationComponent= Vue.extend({
    template: '#component-location-template',
    props: ['item'],
    data(){
        return{
            address: null
        }
    },
});
