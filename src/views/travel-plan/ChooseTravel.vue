<template>
  <div class="main_content top justify">
    <back to="/travel/new/detail"/>
    <h1 class="main_title">Rekomendasi tempat</h1>
    <div class="subsection">
      <div class="contents">
        <div
          class="card_place"
          v-for="card in cards"
          :key="card.name"
        >
          <div class="content">
            <p class="distance">{{ getDistance(card.latitude, card.longitude, latitude, longitude, "K" ) + " KM" }}</p>
            <div class="header">
              <h1 class="name">{{ card.name }}</h1>
              <div class="check_bg">
                <v-checkbox
                  v-model="card.status"
                  color="white"
                />
              </div>
            </div>
          </div>
          <img :src="card.thumbnail" alt="">
        </div>
      </div>
    </div>
    <div class="travel_next">
      <div>
        <button v-on:click="submitPlan()">Tambahkan</button>
      </div>
    </div>
  </div>
</template>

<script>
import Back from '@/components/utils/Back.vue'
import Button from '@/components/utils/Button.vue'
import { currentLoc } from "../../mocks/config.js"

export default {
  name: 'ChooseTravel',
  components: {
    Back, Button
  },
  data () {
    return {
      latitude: currentLoc.lat,
      longitude: currentLoc.long
    }
  },
  computed: {
    cards() {
      const places = this.$store.state.preference.places
      console.log("Places", places)
      if (places.length == 0) {
        console.log("error")
        this.$router.push({ path: "/travel/new" })
      }
      return this.$store.state.preference.places
    },
    status() {
      const status = this.$store.state.preference.status;
      console.log("Status", status)
      if (status == "done") {
        this.$router.push({ name: "home" })
      }
      return this.$store.state.preference.status;
    }
  },
  methods: {
    updateCards: function(cards) {
      this.cards = cards
    },
    getDistance(lat1, lon1, lat2, lon2, unit) {
      if ((lat1 == lat2) && (lon1 == lon2)) {
        return 0;
      }
      else {
        var radlat1 = Math.PI * lat1/180;
        var radlat2 = Math.PI * lat2/180;
        var theta = lon1-lon2;
        var radtheta = Math.PI * theta/180;
        var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        if (dist > 1) {
          dist = 1;
        }
        dist = Math.acos(dist);
        dist = dist * 180/Math.PI;
        dist = dist * 60 * 1.1515;
        if (unit=="K") { dist = dist * 1.609344 }
        if (unit=="N") { dist = dist * 0.8684 }
        return dist.toFixed(1);
      }
    },
    submitPlan() {
      let order = []
      for (let i = 0; i < this.cards.length; i++) {
        if (this.cards[i].status) {
          order.push(this.cards[i].id)
        }
      }
      console.log(order)
      this.$store.dispatch("preference/submitPlan", order, { root: true }).then(response => {
        this.$router.push({ name: "home" })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.travel_next {
  background-color: white;
  bottom: 0;
  position: fixed;
  width: 100vw;
  height: 15vh;
  padding-top: 3.5vh;
  z-index: 999;

  >div {
    width: calc(100% - 12vw);
  }
}

button {
  color: white;
  background-color: #F99704;
  width: 100%;
  padding: 2.5vh 4vh;
  border-radius: 0.5rem;
  transition-duration: 0.2s;

  &:active {
    background-color: rgb(207, 124, 0);
  }
}

.content {
  // display: flex;
  // flex-direction: row;
}
</style>
