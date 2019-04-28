<template>
  <div class="travel_page justify">
    <div class="warn">
      <p class="warn_empty">Belum ada travel plan yang aktif saat ini nih.</p>
      <router-link :to="{ name: 'new-travel' }">
        <p>Yuk jalan-jalan!</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TravelActive',
  computed: {
    plans() {
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
