<template>
  <div class="travel_page justify">
    <!-- {{ histories }} -->
    <div
      class="warn"
      v-if="histories.length == 0"
    >
      <p class="warn_empty">Kamu belum pernah buat Travel Plan nih.</p>
      <router-link :to="{ name: 'new-travel' }">
        <p>Yuk jalan-jalan!</p>
      </router-link>
    </div>
    <div>
      <card-travel-list
        v-for="history in histories"
        :id="history.id.toString()"
        :key="history.id"
        :name="history.title"
        :startdate="history.start_date"
        :enddate="history.end_date"
      />
    </div>
  </div>
</template>

<script>
import CardTravelList from '@/components/card/CardTravelList.vue'

export default {
  name: 'TravelHistory',
  components: {
    CardTravelList
  },
  computed: {
    histories () {
      return this.$store.state.travelPlanStore.histories
    }
  },
  mounted() {
    this.$store.dispatch("travelPlanStore/getHistories")
      .then(() => { console.log("OK") })
  }
}
</script>

<style lang="scss" scoped>
@import 'styles'
</style>
