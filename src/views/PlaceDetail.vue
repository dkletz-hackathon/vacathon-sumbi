<template>
  <div class="place">
    <div class="header">
      <div class="content top justify">
        <back to="/" white="true" />
        <h1 class="name">Braga City Street</h1>
        <div class="category">
          <p>Street City</p>
        </div>
      </div>
      <img src="https://fokusjabar.co.id/wp-content/uploads/2019/01/20170617021322.jpg" alt="">
    </div>
    <div class="detail justify">
      <div class="subdetail">
        <v-icon>location_on</v-icon>
        <p>Jl. Braga No.99-101, Braga, Sumur Bandung, Kota Bandung</p>
      </div>
      <div class="subdetail">
        <v-icon>phone</v-icon>
        <p>(022) 4260533</p>
      </div>
      <div class="separator" />
      <p class="desc">Braga City Walk adalah sebuah kawasan wisata terpadu atau (Mixed Use Development) yang mana di dalam kawasan wisata ini terdapat fasilitas lengkap dan modern.</p>
      <div class="maps">
        <maps />
      </div>
    </div>
  </div>
</template>

<script>
import Back from '@/components/utils/Back.vue'
import Maps from '@/components/maps/Maps.vue'

export default {
  name: 'PlaceDetail',
  components: {
    Back, Maps
  }
}
</script>

<style lang="scss" scoped>
.place {
  >.header {
    height: 57vh;
    overflow: hidden;

    img {
      filter: brightness(0.75);
      height: 100%;
    }

    >.content {
      position: absolute;
      z-index: 90;
      color: white;
      
      >.name {
        padding-top: 30vh;
        margin-bottom: 1rem;
        font-size: 3.5vh;
      }

      >.category {
        font-size: 2vh;
        font-weight: 400;
        // background-color: rgba(255, 255, 255, 0.2);
        // padding: 0.5rem 0.8rem;
        // border: 0.1rem solid rgb(146, 146, 146);
        // border-radius: 0.5rem;
        width: auto;

        p {
          margin: 0;
        }
      }
    }
  }

  >.detail {
    padding-top: 3vh;

    .subdetail {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-bottom: 2vh;

      i {
        color: #FA6378;
      }
      
      p {
        margin: 0 3rem 0 0.7rem;
        font-size: 2vh;
      }
    }

    .separator {
      width: 20vw;
      height: 0.3rem;
      margin: 3vh 0;
      background-color: rgb(53, 53, 53);
    }

    .desc {
      font-size: 2vh;
    }

    .maps {
      margin-top: 5vh;
      width: calc(100vw - 12vw);
      height: 50vh;
    }
  }
}
</style>
