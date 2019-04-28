<template>
  <div class="login main_content justify">
    <h1 class="main_title">Welcome to Indite!</h1>
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
    >
      <v-text-field
        label="Username"
        outline
        required
        class="login_input"
        :rules="usernameRules"
        v-model="username"
        prepend-inner-icon="person"
      ></v-text-field>
      <v-text-field
        label="Password"
        outline
        required
        class="login_input"
        :rules="passwordRules"
        v-model="password"
        type="password"
        prepend-inner-icon="lock"
      ></v-text-field>
    </v-form>
    <button
      @click="login"
    >
      Login
    </button>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      comp: 'LoginBox',
      username: '',
      password: '',
      valid: true,
      usernameRules: [
        v => !!v || 'Name is required'
      ],
      passwordRules: [
        v => !!v || 'Password is required'
      ],
    }
  },
  methods: {
    login () {
      if (this.validate()) {
        let username = this.username;
        let password = this.password;

        this.$store.dispatch("auth/login", { username, password }, { root: true })
          .then(() => {
            console.log("Login success");
            this.$router.push("/");
          })
          .catch(err => console.log(err));
      }
    },
    validate () {
      if (this.$refs.form.validate()) {
        this.snackbar = true
        return true
      }
      return false
    },
  }
}
</script>

<style lang="scss" scoped>
.login {
  height: 100vh;
  padding-top: 15vh;
  .login_input {
    margin: 0;
  }
  button {
    color: white;
    background-color: #F99704;
    width: 100%;
    padding: 2.5vh 4vh;
    border-radius: 0.5rem;
    transition-duration: 0.2s;

    &:active {
      background-color: rgb(207, 124, 0);
    }
  }
}
</style>
