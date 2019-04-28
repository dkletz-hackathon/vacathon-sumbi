<template>
  <v-icon
    class="back"
    @click="$router.go(-1)"
    :class="white == 'true' ? 'white-color' : ''"
  >
    keyboard_backspace
  </v-icon>
</template>

<script>
export default {
  name: 'Back',
  props: {
    to: String,
    white: String
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
