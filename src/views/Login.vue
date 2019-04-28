<template>
  <div class="login">
    <div class="expandable"></div>
    <component :is='comp'/>
    <div class="expandable"></div>
  </div>
</template>

<script>
import LoginBox from "@/components/@Login/LoginBox.vue";

export default {
  name: 'Login',
  components: {
    LoginBox
  },
  data () {
    return {
      comp: 'LoginBox'
    }
  }
}
</script>

<style>
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.expandable {
  flex-basis: 1;
}
</style>
