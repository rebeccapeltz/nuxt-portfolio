<template lang="html">
  <header class="inner-column header-nav">
    <Navbar />
  </header>
</template>

<script>
import Navbar from '~/components/Navbar.vue'

export default {
components: {
    Navbar,
  },
}
</script>

<style lang="scss" scoped>
.header-nav {
  display: flex;
  justify-content: space-between;

}
.main-menu {
  display: flex;
  margin-top: 2rem;
}


</style>
