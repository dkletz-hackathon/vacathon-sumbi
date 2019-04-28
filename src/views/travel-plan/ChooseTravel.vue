<template>
  <div class="main_content top justify">
    <back to="/travel/new/detail"/>
    <h1 class="main_title">Rekomendasi tempat</h1>
    <div class="subsection">
      <div class="header">
        <h1 class="header_title">Makan romantis</h1>
        <router-link class="header_link" to="test">Lihat Semua</router-link>
      </div>
      <div class="contents">
        <div
          class="card_place"
          v-for="card in cards"
          :key="card.name"
        >
          <div class="content">
            <p class="distance">{{ card.distance }}</p>
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
          <img :src="card.src" alt="">
        </div>
      </div>
    </div>
    <div class="travel_next">
      <div>
        <Button
          title="Selanjutnya"
          :link="{ name: 'choose-travel' }"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Back from '@/components/utils/Back.vue'
import Button from '@/components/utils/Button.vue'

export default {
  name: 'ChooseTravel',
  components: {
    Back, Button
  },
  data () {
    return {
      cards: [
        {
          name: 'Braga City Street',
          src: 'https://fokusjabar.co.id/wp-content/uploads/2019/01/20170617021322.jpg',
          distance: '1.5 km',
          status: false
        },
        {
          name: 'Braga City Streets',
          src: 'https://fokusjabar.co.id/wp-content/uploads/2019/01/20170617021322.jpg',
          distance: '1.5 km',
          status: false
        }
      ]
    }
  },
  methods: {
    updateCards: function(cards) {
      this.cards = cards
    }
  },
  beforeMount() {
    const cards = this.$store.getters["planResult/getPlans"] 
    this.updateCards(cards)
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

.content {
  // display: flex;
  // flex-direction: row;
}
</style>
