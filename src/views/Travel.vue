<template>
  <div id="travel">
    <div class="main_content">
      <div class="travel_header top">
        <h1 class="main_title justify">Travel Plan</h1>
      </div>
      <div class="travel_content">
        <travel-history />
      </div>
    </div>
    <navbar />
  </div>
</template>

<script>
import Navbar from '@/components/navbar/Navbar.vue'
import TravelHistory from '@/components/@Travel/TravelHistory.vue'

export default {
  name: 'Travel',
  components: {
    Navbar,
    TravelHistory
  }
}
</script>

<style lang="scss" scoped>
$header: 12vh;

.travel_header {
  background-color: white;
  width: 100vw;
  height: $header;
}

.travel_content {
  height: calc(100vh - $header);
  overflow: scroll;
}
</style>
