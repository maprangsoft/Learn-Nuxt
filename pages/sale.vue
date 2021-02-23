<template lang="">
  <div> <Navbar
  :myWebSite="`Maprangsoft`"
  ></Navbar>

  <h1>Sale page</h1> <img
  src="~/assets/images/kai.jpg" alt="">
<br><br>

<h1> at page: {{$store.state.counter}}</h1>
<button class="btn btn-success" @click="plus()">บวกเพิ่ม</button>
<hr>

<div>
  <!-- {{$store.state.certificates}} -->
  <hr>

<form @submit.prevent="add()">
  <input type="text" v-model="id" required>
  <input type="text" v-model="name" required>
  <input type="text" v-model="provided_by" required>
  <input type="text" v-model="detail" required>

<div>
  <br>
  <button type="submit" class="btn btn-primary">add</button>
    <button type="button" class="btn btn-secondary" @click="update()">update</button>
</div>

</form>

   <table class="table table-bordered table-hover">
<thead class="thead-dark">
  <tr>
    <th>id</th>
    <th>name</th>
    <th>provided_by</th>
    <th>detail</th>
    <th>manage</th>
  </tr>
</thead>
<tbody>
  <tr v-for="(certificate, index) in $store.state.certificates" :key="index">
    <td>{{certificate.id}}</td>
     <td>{{certificate.name}}</td>
   <td>{{certificate.provided_by}}</td>
   <td>{{certificate.detail}}</td>
   <td>
     <button class="btn btn-success btn-xs" @click="edit(certificate)">edit</button>
     <button class="btn btn-danger btn-xs" @click="del(certificate.id)">delete</button>
   </td>
  </tr>
</tbody>
     </table>
</div>

  </div>
</template>
<script>
import Navbar from "~/components/Navbar";

export default {
  layout: "blank",
   head() {
      return {
        title: "my sale page",
      }
 },
 data(){
return {
  id: "",
  name: "",
  provided_by: "",
  detail: "",
}
 },
  components: {
    Navbar,

  },
  methods:{
    plus(){
      this.$store.commit("INCREMENT");
    },
    add(){
      this.$store.commit("ADD_CERTIFICATE", {
                id: this.id,
                name: this.name,
                provided_by: this.provided_by,
                detail: this.detail,
         });
    },
    edit(item){

        this.id = item.id;
           this.name = item.name;
              this.provided_by = item.provided_by;
                 this.detail = item.detail;
    },

    update(){
      this.$store.commit("UPDATE_CERTIFICATE", {
                id: this.id,
                name: this.name,
                provided_by: this.provided_by,
                detail: this.detail,
         });
    },
      del(id){
        this.$store.commit("DELETE_CERTIFICATE", id);
    }
  }
};
</script>
<style lang=""></style>
