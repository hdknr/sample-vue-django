var app = new Vue({
  el: '#app',
  data:{
      show: false,
      marginLeft:0, width: 0
  },
  methods: {
    closeSideBar(){
        console.log("closeSideBar");
        this.marginLeft = 0;
        this.width = 0;
    },
    openSideBar(){
        console.log("openSideBar");
        this.marginLeft = "250px";
        this.width = "250px";
    }
  }
});
