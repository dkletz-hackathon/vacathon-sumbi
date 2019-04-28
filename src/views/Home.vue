<template>
  <div class="home">
    <div class="main_content top">
      <h1 class="main_title justify">Selamat Datang!</h1>
      <div class="section">
        <h1 class="main_section justify">Preferensi Vendor</h1>
        <p class="main_desc justify">Berikut daftar vendor yang cocok buat bisnis Anda.</p>
        <div class="subsection">
          <div class="header justify">
            <h1 class="header_title">Konveksi</h1>
            <router-link class="header_link" to="test">Lihat Semua</router-link>
          </div>
          <div class="contents">
            <carousel :data="test" />
          </div>
        </div>
      </div>
    </div>
    <navbar active="0" />
  </div>
</template>

<script>
import Navbar from '@/components/navbar/Navbar.vue'
import Carousel from '@/components/carousel/Carousel.vue'

export default {
  name: 'home',
  components: {
    Navbar, Carousel
  },
  data () {
    return {
      test: [
        {
          name: 'Hehe'
        },
        {
          name: 'Hoho'
        }
      ]
    }
  }
}
</script>
