<template>
  <div class="travel_page justify">
    <div class="warning">
      <p class="warn_empty">Belum ada travel plan yang aktif saat ini nih.</p>
      <router-link to="/">
        <p>Yuk jalan-jalan!</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TravelActive'
}
</script>

<style lang="scss" scoped>
@import 'styles'
</style>
