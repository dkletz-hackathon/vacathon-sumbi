<template>
  <div id="business">
    <div class="main_content">
      <h1 class="main_title">Bisnis Anda</h1>
    </div>
    <navbar />
  </div>
</template>

<script>
import Navbar from '@/components/navbar/Navbar.vue'

export default {
  name: 'Business',
  components: {
    Navbar
  }
}
</script>

<style lang="scss" scoped>
#business {

}
</style>
