<template>
  <router-link :to="link">
    <div class="card_travel_list">
      <div class="content">
        <div class="header">
          <h1 class="name">{{ name }}</h1>
        </div>
        <p>{{ start_date }} s/d {{ end_date }}</p>
      </div>
      <img :src="image" alt="">
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'CardTravelList',
  props: {
    name: String,
    id: String,
    enddate: String,
    startdate: String
  },
  data () {
    return {
      link: '',
      start_date: '',
      end_date: '',
      image: ''
    }
  },
  created () {
    this.link = `/place/${this.id}`
    this.start_date = this.startdate.split(' ')[0]
    this.end_date = this.enddate.split(' ')[0]

    const rand = Math.floor(Math.random() * (5 - 1) + 1);
    switch (rand) {
      case 1:
        this.image = 'https://www.pegipegi.com/travel/wp-content/uploads/2017/11/03.jpg'
        break;
      case 2:
        this.image = 'https://statik.tempo.co/data/2018/08/07/id_724304/724304_720.jpg'
        break;
      case 3:
        this.image = 'https://sky-adventure.com/wp-content/uploads/2016/10/18.-Lapangan-Jendral-Cikole-Lembang.jpg'
        break;
      case 4:
        this.image = 'http://traveltodayindonesia.com/wp-content/uploads/2018/05/DSC08181.jpg'
        break;
      case 5:
        this.image = 'https://services.sportourism.id/fileload/artapela-bandung-2jpg-xA9R.jpg?q=75'
        break;
      default:
        break;
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
