<template>
  <div class="main_content top justify">
    <back to="/travel"/>
    <h1 class="main_title">Mau ngapain nih?</h1>
    <p class="main_desc">Pilih beberapa preferensi jalan-jalan kamu. Kami akan bantu kamu cari tempat-tempat yang cocok.</p>
    <div>
      <v-checkbox
        v-for="p in prefs"
        v-model="p.status"
        class="option"
        :key="p.id"
        :label="`${p.name}`"
      />
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
import Button from '@/components/utils/Button.vue'

export default {
  name: 'NewTravel',
  components: {
    Back, Button
  },
  data () {
    return {
      checkbox: '',
      prefs: [
        {
          id: 0,
          name: 'Foto-foto cakep',
          status: false
        },
        {
          id: 1,
          name: 'Berenang',
          status: false
        },
        {
          id: 2,
          name: 'Makan romantis di restoran',
          status: false
        },
        {
          id: 3,
          name: 'Melihat keindahan alam',
          status: false
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.option {
  margin-top: 0;
}

.travel_next {
  bottom: 0;
  position: fixed;
  width: calc(100% - 12vw);
  margin-bottom: 3vh;
}
</style>
