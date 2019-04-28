<template>
  <form class="login-box" @submit.prevent="login">
    <div class="header">
      Login
    </div>
    <div class="form-input">
      <input required v-model="username" type="text" class="round" id="username" name="username" placeholder="Username">
      <v-text-field
        label="Username"
        prepend-icon="person"
      ></v-text-field>
    </div>
    <div class="form-input">
      <input required v-model="password" type="password" class="round" id="password" name="password" placeholder="Password">
    </div>
    <button class="form-button">
      Login
    </button>
  </form>
</template>

<script>
export default {
  name: 'LoginBox',
  data() {
    return {
      username: "",
      password: ""
    }
  },
  methods: {
    login: function() {
      let username = this.username;
      let password = this.password;

      this.$store.dispatch("auth/login", { username, password }, { root: true })
        .then(() => {
          console.log("Login success");
          this.$router.push("/");
        })
        .catch(err => console.log(err));
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'styles'
</style>
