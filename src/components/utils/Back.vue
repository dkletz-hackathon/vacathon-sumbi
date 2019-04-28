<template>
  <router-link :to="to">
    <v-icon
      class="back"
      :class="white == 'true' ? 'white-color' : ''"
    >
      keyboard_backspace
    </v-icon>
  </router-link>
</template>

<script>
export default {
  name: 'Back',
  props: {
    to: '',
    white: ''
  }
}
</script>

<style lang="scss" scoped>
.back {
  margin-bottom: 4vh;
  font-size: 5vh;

  &.white-color {
    color: white !important;
  }
}
</style>
