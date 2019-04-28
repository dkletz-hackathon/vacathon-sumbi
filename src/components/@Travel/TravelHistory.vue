<template>
  <div class="travel_page justify">
    <div class="warn">
      <p class="warn_empty">Kamu belum pernah buat Travel Plan nih.</p>
      <router-link :to="{ name: 'new-travel' }">
        <p>Yuk jalan-jalan!</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TravelHistory',
  computed: {
    histories() {
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
