<template lang="html">
  <header class="inner-column header-nav">

    <nuxt-link :to="{name: 'index'}" class="logo text-lg">
      <cld-image publicId="vuejs-portfolio/cat-logo" height="80" crop="scale" effect="replace_color:black:50:DCB363" />
    </nuxt-link>

    <nav class="main-menu" role="navigation">
      <nuxt-link class="menu-item" :to="{name: 'projects'}">
        Projects
      </nuxt-link>
      <nuxt-link class="menu-item" :to="{name: 'upload'}">
        Upload
      </nuxt-link>
      <nuxt-link class="menu-item" :to="{name: 'contact'}">
        Contact
      </nuxt-link>
    </nav>
  </header>

</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.logo {
  padding: 10px 0;
}
.header-nav {
  display: flex;
  justify-content: space-between;
  margin-right: 1rem;
}
.main-menu {
  display: flex;
}
.menu-item {
  padding: 10px;

  &:last-child {
    padding-right: 0;
  }
  font-family: 'Yatra One';
  font-size: 30px;
}
</style>
