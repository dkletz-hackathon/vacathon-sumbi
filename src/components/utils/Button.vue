<template>
  <button>
    Hehe
  </button>
</template>

<script>
export default {
  name: 'Button'
}
</script>

<style lang="scss" scoped>
button {
  color: white;
  background-color: blue;
  width: 100%;
  padding: 2.5vh 4vh;
  border-radius: 0.5rem;
  transition-duration: 0.2s;

  &:active {
    background-color: rgb(0, 0, 179);
  }
}
</style>
