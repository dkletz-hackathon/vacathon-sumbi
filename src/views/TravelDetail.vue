<template>
  <div class="plan content">
    <div class="header top justify">
      <back to="/" />
      <h1 class="name">Plan {{ plan.title }}</h1>
      <p v-if="isFinished">Travel Plan sedang berlangsung</p>
      <p v-else>Travel Plan sudah selesai</p>
      <div class="detail">
        <h1 class="title">Tanggal</h1>
        <p class="content">{{ startDate }} s/d {{ endDate }}</p>
      </div>
    </div>
    <div class="justify">
      <div
        v-for="(d, idx) in plan.locationPlans"
        :key="d.id"
      >
        <h1 class="count">Tempat ke-{{idx+1}}</h1>
        <card
          :id="d.location.id.toString()"
          :name="d.location.name"
          :image="d.location.thumbnail"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Back from '@/components/utils/Back.vue'
import Card from '@/components/card/Card.vue'
import moment from 'moment-timezone'

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
  },
  computed: {
    plan() {
      return this.$store.state.travelPlanStore.plan
    },
    startDate() {
      return moment(this.plan.start_date).format("YYYY-MM-DD")
    },
    endDate() {
      return moment(this.plan.end_date).format("YYYY-MM-DD")
    },
    isFinished() {
      return new Date() > new Date(this.plan.end_date)
    }
  },
  mounted() {
    this.$store.dispatch("travelPlanStore/getDetailPlan", this.$route.params.id)
            .then(() => { console.log("OK") })
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
