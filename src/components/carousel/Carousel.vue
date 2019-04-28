<template>
  <div class="carousel">
    <div
      v-for="d in data"
      :key="d.name"
      class="item"
    >
      {{ d.name }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  props: {
    data: Array
  }
}
</script>

<style lang="scss" scoped>
.carousel {
  display: flex;
  flex-direction: row;
  overflow: scroll;

  >.item {
    flex-basis: 50%;
    width: 50vw;
    background-color: orange;
    margin-right: 4vw;
    margin-top: 2vh;
    padding: 2rem;
    border-radius: 0.5rem;
  }
}
</style>
