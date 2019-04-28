<template>
  <router-link :to="link">
    <button>{{ title }}</button>
  </router-link>
</template>

<script>
export default {
  name: 'Button',
  props: {
    title: String,
    link: Object
  }
}
</script>

<style lang="scss" scoped>
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
</style>
