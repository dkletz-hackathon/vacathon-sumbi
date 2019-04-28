<template>
  <div class="navbar_item">
    <router-link :to="{ name: to }">
      <p>{{ name }}</p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'NavbarItem',
  props: {
    name: String,
    to: String
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
    p {
      margin: 0;
      padding: 0;
      font-weight: 600;
      font-size: 0.8rem;
      color: grey;
    }
  }
}
</style>
