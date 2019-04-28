<template>
  <div
    class="navbar_item"
    :class="active ? 'active': ''"
  >
    <router-link :to="{ name: to }">
      <v-icon>{{ icon }}</v-icon>
      <p>{{ name }}</p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'NavbarItem',
  props: {
    name: String,
    to: String,
    icon: String,
    active: Boolean
  }
}
</script>

<style lang="scss" scoped>
.navbar_item {
  flex-basis: 100%;
  max-width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  a {
    text-align: center;
    p {
      margin: 0;
      padding: 0;
      font-weight: 600;
      font-size: 0.8rem;
      padding-top: 0.15rem;
      color: grey;
    }
  }

  &.active {
    i, p {
      color: #F99704;
    }
  }
}
</style>
