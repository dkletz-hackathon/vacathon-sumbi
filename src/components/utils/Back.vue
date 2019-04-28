<template>
  <router-link :to="to">
    <v-icon class="back">keyboard_backspace</v-icon>
  </router-link>
</template>

<script>
export default {
  name: 'Back',
  props: {
    to: ''
  }
}
</script>

<style lang="scss" scoped>
.back {
  margin-bottom: 4vh;
  font-size: 5vh;
}
</style>
