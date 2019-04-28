<template>
  <div class="main_content">
    <div class="travel_header top">
      <back class="justify" to="/travel"/>
      <h1 class="main_title justify">Mau ngapain nih?</h1>
      <p class="main_desc justify">Pilih beberapa preferensi jalan-jalan kamu. Kami akan bantu kamu cari tempat-tempat yang cocok.</p>
    </div>
    <div class="justify travel_option">
      <div
        v-for="p in prefs"
        @click="choose(p.id)"
        :class="isActive(p.id) ? 'active': ''"
        :key="p.id"
      >
        <card-prefs
          :name="p.name"
          :image="p.img"
        />
      </div>
    </div>
    <div class="travel_next">
      <div>
        <button v-on:click="submitChoosen()">Selanjutnya</button>
      </div>
    </div>
  </div>
</template>

<script>
import Back from '@/components/utils/Back.vue'
import Button from '@/components/utils/Button.vue'
import CardPrefs from '@/components/card/CardPrefs.vue'

export default {
  name: 'NewTravel',
  components: {
    Back, Button, CardPrefs
  },
  data () {
    return {
      checkbox: '',
      prefs: [],
      chosen: [],
      isChosen: []
    }
  },
  created () {
    const preferences = require('./../../mocks/preferences.json')
    this.prefs = preferences
    this.prefs.forEach(f => this.isChosen.push(false))
  },
  methods: {
    choose (id) {
      if (!this.isChosen[id-1]) {
        this.chosen.push(id)
        this.isChosen[id-1] = true
      } else {
        for(let i=0; i<this.isChosen.length; i++) {
          if (this.chosen[i] == id) {
            this.chosen.splice(i, 1)
            break;
          }
        }
        this.isChosen[id-1] = false
      }
    },
    isActive (id) {
      console.log(this.chosen)
      console.log(this.isChosen)
      return this.isChosen[id-1]
    },
    submitChoosen() {
      this.$store.dispatch("preference/submitPreference", { choosen: this.chosen }, { root: true })
      this.$router.push({ name: "data-travel" })
    }
  }
}
</script>

<style lang="scss" scoped>
$header: 30vh;

.option {
  margin-top: 0;
}

.travel_header {
  position: fixed;
  height: $header;
  background-color: white;
  z-index: 999;
}

.travel_option {
  overflow: hidden;
  margin-top: $header;
  margin-bottom: 15vh;

  >.active {
    >.card_prefs {
      border: 3px solid rgb(58, 179, 235);
      >img {
        filter: brightness(0.5);
      }
    }
  }
}

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
</style>
