<template>
  <div class="main_content top justify">
    <back to="/travel/new"/>
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
            <h1 class="name">{{ card.name }}</h1>
          </div>
          <img :src="card.src" alt="">
        </div>
      </div>
    </div>
    <div class="travel_next">
      <Button
        title="Selanjutnya"
        :to="{ name: 'show-travel' }"
      />
    </div>
  </div>
</template>

<script>
import Back from '@/components/utils/Back.vue'
import Carousel from '@/components/carousel/Carousel.vue'
import Button from '@/components/utils/Button.vue'

export default {
  name: 'ShowPlan',
  components: {
    Back, Carousel, Button
  },
  data () {
    return {
      cards: [
        {
          name: 'Braga City Street',
          src: 'https://fokusjabar.co.id/wp-content/uploads/2019/01/20170617021322.jpg'
        },
        {
          name: 'Braga City Street',
          src: 'https://fokusjabar.co.id/wp-content/uploads/2019/01/20170617021322.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.travel_next {
  bottom: 0;
  position: fixed;
  width: calc(100% - 12vw);
  margin-bottom: 3vh;
}
</style>
