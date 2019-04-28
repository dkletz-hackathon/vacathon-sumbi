<template>
  <div class="card_prefs">
    <div class="content">
      <div class="header">
        <h1 class="name">{{ name }}</h1>
      </div>
    </div>
    <img :src="image" alt="">
  </div>
</template>

<script>
export default {
  name: 'CardPrefs',
  props: {
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
