<template>
  <div id="travel">
    <div class="main_content">
      <div class="travel_header top">
        <h1 class="main_title justify">Travel Plan</h1>
        <div class="travel_option">
          <div
            :class="active == 1 ? 'active' : ''"
            @click="setFirst"
          >
            <h1>Sedang Aktif</h1>
          </div>
          <div
            :class="active == 2 ? 'active' : ''"
            @click="setSecond"
          >
            <h1>Riwayat</h1>
          </div>
        </div>
      </div>
      <div class="travel_content">
        <component :is='component' />
      </div>
    </div>
    <navbar active="1" />
  </div>
</template>

<script>
import Navbar from '@/components/navbar/Navbar.vue'
import TravelHistory from '@/components/@Travel/TravelHistory.vue'
import TravelActive from '@/components/@Travel/TravelActive.vue'

export default {
  name: 'Travel',
  components: {
    Navbar,
    TravelHistory,
    TravelActive
  },
  data () {
    return {
      component: 'TravelActive',
      active: 1
    }
  },
  methods: {
    setFirst () {
      this.active = 1
      this.component = 'TravelActive'
    },
    setSecond () {
      this.active = 2
      this.component = 'TravelHistory'
    }
  }
}
</script>

<style lang="scss" scoped>
$header: 18vh;

.travel_header {
  background-color: white;
  width: 100vw;
  height: $header;
}

.travel_content {
  height: calc(100vh - $header);
  overflow: scroll;
}

.travel_option {
  display: flex;
  flex-direction: row;
  padding-top: 1.5vh;

  >div {
    cursor: pointer;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
    h1 {
      font-size: 2.3vh;
      font-weight: 400;
      color: grey;
    }

    &.active {
      h1 {
        color: #F99704;
        font-weight: 600;
      }
    }
  }
}
</style>
