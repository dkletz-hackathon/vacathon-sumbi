<template>
  <router-link :to="link">
    <div class="card_travel_list">
      <div class="content">
        <div class="header">
          <h1 class="name">{{ name }}</h1>
        </div>
        <p>{{ start_date }} s/d {{ end_date }}</p>
      </div>
      <!-- <img :src="image" alt=""> -->
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'CardTravelList',
  props: {
    name: String,
    image: String,
    id: String,
    enddate: String,
    startdate: String
  },
  data () {
    return {
      link: '',
      start_date: '',
      end_date: ''
    }
  },
  created () {
    this.link = `/place/${this.id}`
    this.start_date = this.startdate.split(' ')[0]
    this.end_date = this.enddate.split(' ')[0]
  }
}
</script>

<style lang="scss" scoped>

</style>
