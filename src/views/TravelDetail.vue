<template>
  <div class="plan content">
    <div class="header top justify">
      <back to="/" />
      <h1 class="name">Plan Senang-Senang</h1>
      <p>Travel Plan sedang berlangsung</p>
      <div class="detail">
        <h1 class="title">Tanggal</h1>
        <p class="content">2018-05-05 s/d 2018-05-09</p>
      </div>
    </div>
    <div class="justify">
      <div
        v-for="(d, idx) in data"
        :key="d.id"
      >
        <h1 class="count">Tempat ke-{{idx+1}}</h1>
        <card
          :id="d.id.toString()"
          :name="d.name"
          :image="d.src"
          :distance="d.distance"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Back from '@/components/utils/Back.vue'
import Card from '@/components/card/Card.vue'

export default {
  name: 'TravelDetail',
  components: {
    Back, Card
  },
  data () {
    return {
      data: [
        {
          id: 1,
          name: 'Braga City Street',
          src: 'https://fokusjabar.co.id/wp-content/uploads/2019/01/20170617021322.jpg',
          distance: '1.5 km',
          status: false
        },
        {
          id: 2,
          name: 'Braga City Streets',
          src: 'https://fokusjabar.co.id/wp-content/uploads/2019/01/20170617021322.jpg',
          distance: '1.5 km',
          status: false
        },
        {
          id: 3,
          name: 'Braga City Streets',
          src: 'https://fokusjabar.co.id/wp-content/uploads/2019/01/20170617021322.jpg',
          distance: '1.5 km',
          status: false
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.plan {
  background-color: rgb(237, 239, 241);
  min-height: 100vh;

  >.header {
    background-color: white;
    padding-bottom: 3vh;
    -webkit-box-shadow: 0px 23px 57px -28px rgba(0,0,0,0.2);
    -moz-box-shadow: 0px 23px 57px -28px rgba(0,0,0,0.2);
    box-shadow: 0px 23px 57px -28px rgba(0,0,0,0.2);

    >.name {
      font-size: 4vh;
    }

    >.detail {
      margin-top: 3vh;
      >.title {
        font-size: 3vh;
        color: #F99704;
        margin-bottom: 1.5vh;
      }
      >.content {
        font-size: 2.5vh;
      }
    }
  }
  
  .count {
    font-size: 3vh;
    margin: 0;
    margin-top: 4vh;
  }
}
</style>
