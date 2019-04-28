<template>
  <div class="travel_page justify">
    <div
      class="warn"
      v-if="plans.length == 0"
    >
      <p class="warn_empty">Belum ada travel plan yang aktif saat ini nih.</p>
      <router-link :to="{ name: 'new-travel' }">
        <p>Yuk jalan-jalan!</p>
      </router-link>
    </div>
    <div>
      <card-travel-list
        v-for="plan in plans"
        :id="plan.id.toString()"
        :key="plan.id"
        :name="plan.title"
        :startdate="plan.start_date"
        :enddate="plan.end_date"
      />
    </div>
  </div>
</template>

<script>
import CardTravelList from '@/components/card/CardTravelList.vue'

export default {
  name: 'TravelActive',
  components: {
    CardTravelList
  },
  computed: {
    plans () {
      return this.$store.state.travelPlanStore.plans
    }
  },
  mounted() {
    this.$store.dispatch("travelPlanStore/getPlans")
      .then(() => { console.log("OK") })
  }
}
</script>

<style lang="scss" scoped>
@import 'styles'
</style>
