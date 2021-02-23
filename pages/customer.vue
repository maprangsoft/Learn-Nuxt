<template lang="">
  <div> <Navbar
  :myWebSite="`Maprangsoft`"
  ></Navbar>

  <h1>Customer page</h1>
  <p>i am customer</p>

<h1>result api 1</h1>

{{technicians}}

<hr>

<h1>result api 2</h1>

{{$store.state.certificates}}

   </div>
</template>
<script>
import Navbar from "~/components/Navbar";

export default {
  layout: "blank",
 head() {
      return {
        title: "my customer page",
      }
 },
 data(){
   return {
     technicians: []
   }
 },
created(){
  console.log('customer page created :>> ');
this.getTechnicianRegister();
},
mounted(){
  //
},
  components: {
    Navbar,

  },
  methods:{
  async getTechnicianRegister(){

      const res = await this.$axios.$get('https://puanchang-api.puncorp.com/api/technician-register');
      this.technicians = res.data;
    }
  }
};
</script>
<style lang=""></style>
