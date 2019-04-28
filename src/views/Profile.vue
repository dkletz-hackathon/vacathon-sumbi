<template>
  <div class="profile">
    <div class="main_content">
      <div class="profile_header">
        <img src="http://cdn2.tstatic.net/tribunnews/foto/bank/images/ilustrasi-solo-traveler-wanita_20180811_181248.jpg" alt="">
      </div>
      <div class="profile_detail justify">
        <div class="identity">
          <h1 class="name">{{ user.full_name }}</h1>
          <h1 class="username">@{{ user.username }}</h1>
        </div>
        <div class="separator" />
        <div class="dashboard">
          <h1 class="title">Shared Plan</h1>
          <div class="warn" v-if="shared.length == 0">
            <p>Anda belum membagikan Travel Plan apapun.</p>
            <p>Mulailah berbagi!</p>
          </div>
          <div v-if="shared.length > 0">
            <card-travel-list
              v-for="share in shared"
              :key="share.id"
              :name="share.title"
              :startdate="share.start_date"
              :enddate="share.end_date"
            />
          </div>
        </div>
      </div>
    </div>
    <navbar active="2" />
  </div>
</template>

<script>
import Navbar from '@/components/navbar/Navbar.vue'
import CardTravelList from '@/components/card/CardTravelList.vue'

export default {
  name: 'Profile',
  components: {
    Navbar,
    CardTravelList
  },
  computed: {
    user() {
      return this.$store.state.profileStore.user
    },
    shared () {
      return this.$store.state.travelPlanStore.shared
    }
  },
  mounted() {
    this.$store.dispatch("profileStore/getProfile")
      .then(() => { console.log("OK") })
    this.$store.dispatch("travelPlanStore/getShared")
      .then(() => { console.log("OK") })
  }
}
</script>

<style lang="scss" scoped>
.profile_header {
  height: 35vh;
  overflow: hidden;
  width: 100%;
  background-color: grey;
  position: fixed;

  img {
    width: 150%;
    filter: brightness(0.8);
  }
}

.profile_detail {
  background-color: white;
  min-height: 100vh;
  width: 100vw;
  border-radius: 1.5rem;
  z-index: 999;
  position: absolute;
  margin-top: 30vh;

  >.identity {
    padding-top: 4vh;
    .name {
      font-size: 3.5vh;
      text-align: center;
    }
    .username {
      font-size: 2.8vh;
      font-weight: 400;
      color: orange;
      text-align: center;
    }
  }

  >.dashboard {
    .title {
      font-size: 4vh;
    }
    .warn {
      padding-top: 2vh;
      p {
        margin: 0;
        text-align: center;
      }
    }
  }
}

.separator {
  width: 100%;
  height: 0.05rem;
  margin: 4vh 0;
  background-color: rgb(204, 204, 204);
}
</style>
