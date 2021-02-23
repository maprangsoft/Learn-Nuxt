<template>
  <div>
    <h1>about me.</h1>

    <form @submit.prevent="login()">
      <div class="form-group">
        <label for="email">Email address:</label>
        <input
          type="email"
          class="form-control"
          placeholder="Enter email"
          id="email"
          v-model="email"
        />
        {{ email }}
      </div>
      <div class="form-group">
        <label for="pwd">Password:</label>
        <input
          type="password"
          class="form-control"
          placeholder="Enter password"
          id="pwd"
          v-model="password"
        />
      </div>
      <div class="form-group form-check">
        <label class="form-check-label">
          <input class="form-check-input" type="checkbox" /> Remember me
        </label>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>
<script>
export default {
  layout: "blank",
  //1. data
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
   async login() {
      try {
        const res = await this.$axios.$post("/login", {
          email: this.email,
          password: this.password,
          client_id: "5dab40282e460000ff0076d4",
          client_secret: "r9dam8WZWsMkzlOrFThK6nEFtigaxCrOmSeyDEPU",
        });

// console.log('result :>> ', res);
return this.$router.push("/sale");

      } catch (error) {
        console.log("login error :>> ", error);
      }

      console.log("data login :>> ", {});
    },
  },
};
</script>

<style>
form {
  width: 500px;
  margin: auto;
}
</style>
