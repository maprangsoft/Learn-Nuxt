<template lang="">
  <div> <ul class="breadcrumb"> <li><a href="#">หน้าหลัก</a></li> <li
  v-if="showBreadcrumb()"><a href="#">{{ $nuxt.$route.name }}</a></li> <li
  v-else>{{ $nuxt.$route.name }}</li> </ul> </div>
</template>
<script>
export default {
  name: "Breadcrumb",
  methods: {
    showBreadcrumb() {
      if (this.$route.name == "sale" || this.$route.name == "customer") {
        return false;
      } else {
        return true;
      }
    },
  },
};
</script>
<style scoped>
/* Style the list */
ul.breadcrumb {
  padding: 10px 16px;
  list-style: none;
  background-color: #eee;
}

/* Display list items side by side */
ul.breadcrumb li {
  display: inline;
  font-size: 18px;
}

/* Add a slash symbol (/) before/behind each list item */
ul.breadcrumb li + li:before {
  padding: 8px;
  color: black;
  content: "/\00a0";
}

/* Add a color to all links inside the list */
ul.breadcrumb li a {
  color: #0275d8;
  text-decoration: none;
}

/* Add a color on mouse-over */
ul.breadcrumb li a:hover {
  color: #01447e;
  text-decoration: underline;
}
</style>
