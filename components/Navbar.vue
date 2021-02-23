<template lang="">
    <div>

        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <a class="navbar-brand" href="#">{{myWebSite}}</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarColor02">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
         <nuxt-link to="/sale" class="nav-link">sale</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link to="/customer" class="nav-link">customer</nuxt-link>
        </li>
      </ul>
      <form class="form-inline">
        <button class="btn btn-outline-light my-2 my-sm-0" type="submit">at component navbar: {{$store.state.counter}}</button>
      </form>
    </div>
  </nav>

    <Breadcrumb></Breadcrumb>

    </div>
</template>
<script>
import Breadcrumb from "~/components/Breadcrumb";
export default {
name:"Navbar",
components:{
      Breadcrumb
},
props:{
      myWebSite: {
      type: String,
      required: true
    },
}

}
</script>
<style lang="">

</style>
