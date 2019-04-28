<template>
  <div class="home">
    <div class="main_content top">
      <h1 class="main_title justify">Selamat Datang!</h1>
      <div class="section margintify active_plan">
        <div class="header">
          <v-icon>card_travel</v-icon>
          <h1 class="intro">Travel Plan Aktif</h1>
        </div>
        <div class="separator" />
        <div class="link">
          <h1 class="name">Plan Senang-Senang</h1>
          <v-icon>navigate_next</v-icon>
        </div>
      </div>
      <div class="section">
        <h1 class="main_section justify">Rekomendasi Tempat</h1>
        <p class="main_desc justify">Berikut daftar tempat wisata yang cocok buat Anda.</p>
        <div
          class="subsection"
          v-for="place in places"
          :key="place.name"
        >
          <div class="header justify">
            <h1 class="header_title">{{ place.name }}</h1>
            <router-link class="header_link" to="test">Lihat Semua</router-link>
          </div>
          <div class="contents justify">
            <card
              v-for="d in place.locations"
              :key="d.id"
              :id="d.id.toString()"
              :name="d.name"
              :image="d.thumbnail"
              :distance="getDistance(d.latitude, d.longitude, latitude, longitude, 'K') + ' KM'"
            />
          </div>
        </div>
      </div>
    </div>
    <navbar active="0" />
  </div>
</template>

<script>
import Navbar from '@/components/navbar/Navbar.vue'
import Card from '@/components/card/Card.vue'
import { currentLoc } from "../mocks/config.js"

export default {
  name: 'home',
  components: {
    Navbar, Card
  },
  data () {
    return {
      test: [
        {
          name: 'Hehe'
        },
        {
          name: 'Hoho'
        },
        {
          name: 'Hohoa'
        },
        {
          name: 'Hohso'
        }
      ],
      latitude: currentLoc.lat,
      longitude: currentLoc.long
      // places: [
      //   {
      //     name: 'City Street',
      //     data: [
      //       {
      //         id: 1,
      //         name: 'Braga City Street',
      //         src: 'https://fokusjabar.co.id/wp-content/uploads/2019/01/20170617021322.jpg',
      //         distance: '1.5 km',
      //         status: false
      //       },
      //       {
      //         id: 2,
      //         name: 'Braga City Streets',
      //         src: 'https://fokusjabar.co.id/wp-content/uploads/2019/01/20170617021322.jpg',
      //         distance: '1.5 km',
      //         status: false
      //       }
      //     ]
      //   },
      //   {
      //     name: 'Nature',
      //     data: [
      //       {
      //         id: 1,
      //         name: 'Braga City Street',
      //         src: 'https://fokusjabar.co.id/wp-content/uploads/2019/01/20170617021322.jpg',
      //         distance: '1.5 km',
      //         status: false
      //       },
      //       {
      //         id: 2,
      //         name: 'Braga City Streets',
      //         src: 'https://fokusjabar.co.id/wp-content/uploads/2019/01/20170617021322.jpg',
      //         distance: '1.5 km',
      //         status: false
      //       }
      //     ]
      //   }
      // ]
    }
  },
  computed: {
    places() {
      return this.$store.state.home.locationsCategory
    }
  },
  methods: {
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
    }
  },
  beforeMount() {
    this.$store.dispatch("home/getLocationsByCategory", {}, { root: true })
  }
}
</script>

<style lang="scss" scoped>
.home {
  margin-bottom: 15vh;
}

.active_plan {
  background-color: grey;
  height: 20vh;
  width: calc(100% - 12vw);
  border-radius: 0.5rem;
  padding: 1.5rem;
  color: white;

  >.link, >.header {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  >.header {
    i {
      color: white;
      margin-right: 0.7rem;
    }
    >.intro {
      font-weight: 400;
      font-size: 2.5vh;
    }
  }

  >.separator {
    width: 100%;
    height: 0.1rem;
    margin: 2vh 0;
    background-color: rgb(160, 160, 160);
  }

  >.link {
    >.name {
      font-size: 3vh;
      font-weight: 400;
      flex-basis: 92%;
    }
    i {
      color: grey;
      margin-right: 0.7rem;
      flex-basis: 8%;
      background-color: white;
      border-radius: 5rem;
      padding: 0.1rem;
      margin-top: 0.2rem;
    }
  }
}
</style>
