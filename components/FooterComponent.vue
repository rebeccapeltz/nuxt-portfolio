<template lang="html">
  <footer class="footer-component">
    <div class="inner-column">
      <div class="social-icons">
      <a
        href="mailto:rebecca.peltz@cloudinary.comsubject=Portfolio"
        target="_blank"
      >
        <font-awesome-icon :icon="['fas', 'envelope']" />
      </a>
      <a href="" target="_blank">
        <font-awesome-icon :icon="['fab', 'linkedin']" />
      </a>
      <a href="" target="_blank">
        <font-awesome-icon :icon="['fab', 'github']" />
      </a>

      <a href="" target="_blank">
        <font-awesome-icon :icon="['fab', 'twitter']" />
      </a>

      <a href="" target="_blank">
        <font-awesome-icon :icon="['fab', 'instagram']" />
      </a>

      <a href="" target="_blank">
        <font-awesome-icon :icon="['fab', 'medium']" />
      </a>

      <a href="" target="_blank">
        <font-awesome-icon :icon="['fab', 'npm']" />
      </a>
    </div>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.footer-component {
  text-align: center;
}
.social-icons {
  font-size: 1rem;
  display: flex;
  justify-content: space-around;

  a {
    display: inline-block;
  }
}
</style>
