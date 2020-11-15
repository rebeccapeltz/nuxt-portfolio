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
.menu-item {
  padding: 10px;
  color: #d8ac52;

  &:last-child {
    padding-right: 0;
  }
  font-family: 'Libre Franklin', 'HelveticaNeue-Light', 'Helvetica Neue Light',
    'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif;
  font-size: 30px;
}
</style>
