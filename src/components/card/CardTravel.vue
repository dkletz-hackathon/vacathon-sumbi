<template>
  <router-link :to="link">
    <div class="card_travel">
      <div class="content">
        <p class="distance">{{ distance }}</p>
        <div class="header">
          <h1 class="name">{{ name }}</h1>
        </div>
      </div>
      <img :src="image" alt="">
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'CardTravel',
  props: {
    distance: String,
    name: String,
    image: String,
    id: String
  },
  data () {
    return {
      link: ''
    }
  },
  created () {
    this.link = `/place/${this.id}`
  }
}
</script>

<style lang="scss" scoped>

</style>
