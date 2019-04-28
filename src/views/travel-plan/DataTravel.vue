<template>
  <div class="main_content top justify">
    <back to="/travel/new"/>
    <h1 class="main_title">Isi data-data berikut</h1>
    <p class="main_desc">Masukkan detail Travel Plan Anda.</p>
    <div>

      <v-text-field
        label="Nama Plan"
        v-model="data.title"
        prepend-icon="subtitles"
      ></v-text-field>

      <v-menu
        ref="menu_1"
        v-model="menu_1"
        :close-on-content-click="false"
        :nudge-right="40"
        :return-value.sync="date"
        lazy
        transition="scale-transition"
        offset-y
        full-width
        min-width="290px"
      >
        <template v-slot:activator="{ on }">
          <v-text-field
            v-model="data.start_date"
            label="Tanggal Mulai"
            prepend-icon="event"
            readonly
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker v-model="data.start_date" no-title scrollable>
          <v-spacer></v-spacer>
          <v-btn flat color="primary" @click="menu_1 = false">Cancel</v-btn>
          <v-btn flat color="primary" @click="$refs.menu_1.save(data.start_date)">OK</v-btn>
        </v-date-picker>
      </v-menu>

      <v-menu
        ref="menu_2"
        v-model="menu_2"
        :close-on-content-click="false"
        :nudge-right="40"
        :return-value.sync="date"
        lazy
        transition="scale-transition"
        offset-y
        full-width
        min-width="290px"
      >
        <template v-slot:activator="{ on }">
          <v-text-field
            v-model="data.end_date"
            label="Tanggal Selesai"
            prepend-icon="event"
            readonly
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker v-model="data.end_date" no-title scrollable>
          <v-spacer></v-spacer>
          <v-btn flat color="primary" @click="menu_2 = false">Cancel</v-btn>
          <v-btn flat color="primary" @click="$refs.menu_2.save(data.end_date)">OK</v-btn>
        </v-date-picker>
      </v-menu>

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
  name: 'DataTravel',
  components: {
    Back, Button
  },
  data () {
    return {
      date: new Date().toISOString().substr(0, 10),
      data: {
        start_date: '',
        end_date: '',
        title: ''
      },
      menu_1: false,
      menu_2: false,
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
