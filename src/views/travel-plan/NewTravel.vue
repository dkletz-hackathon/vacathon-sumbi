<template>
  <div class="main_content">
    <div class="travel_header top">
      <back class="justify" to="/travel"/>
      <h1 class="main_title justify">Mau ngapain nih?</h1>
      <p class="main_desc justify">Pilih beberapa preferensi jalan-jalan kamu. Kami akan bantu kamu cari tempat-tempat yang cocok.</p>
    </div>
    <div class="justify travel_option">
      <card-prefs
        v-for="p in prefs"
        v-model="p.status"
        :key="p.id"
        :name="p.name"
        :image="p.img"
      />
    </div>
    <div class="travel_next">
      <div>
        <Button
          title="Selanjutnya"
          class="justify"
          :link="{ name: 'data-travel' }"
        />
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
      prefs: []
    }
  },
  created () {
    const preferences = require('./../../mocks/preferences.json')
    this.prefs = preferences
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
</style>
