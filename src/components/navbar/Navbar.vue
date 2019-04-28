<template>
  <div id="navbar">
    <navbar-item
      v-for="link in links"
      :key="link.to"
      :name="link.name"
      :to="link.to"
      :icon="link.icon"
      :active="link.active"
    />
  </div>
</template>

<script>
import NavbarItem from './NavbarItem'

export default {
  name: 'Navbar',
  props: {
    active: String
  },
  components: {
    NavbarItem
  },
  data () {
    return {
      links: [
        {
          name: 'Home',
          to: 'home',
          icon: 'home',
          active: true
        },
        {
          name: 'Travel Plan',
          to: 'travel',
          icon: 'card_travel',
          active: false
        },
        {
          name: 'Profile',
          to: 'profile',
          icon: 'people',
          active: false
        }
      ]
    }
  },
  mounted () {
    this.links.forEach(l => l.active = false)
    this.links[this.active].active = true
  }
}
</script>

<style lang="scss" scoped>
#navbar {
  background-color: white;
  height: 10vh;
  width: 100vw;
  position: fixed;
  z-index: 9999;
  bottom: 0;

  display: flex;
  flex-direction: row;

  -webkit-box-shadow: 0px -11px 57px -28px rgba(0,0,0,0.48);
  -moz-box-shadow: 0px -11px 57px -28px rgba(0,0,0,0.48);
  box-shadow: 0px -11px 57px -28px rgba(0,0,0,0.48);
}
</style>
