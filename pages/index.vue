<template>
  <div class="inner-column">
    <div>
      <h2 class="subtitle">Images and Video</h2>
      <LayerComponent :items="projects" />
    </div>
  </div>
</template>

<script>
import LayerComponent from '~/components/LayerComponent.vue'

export default {
  head() {
    return {
      title: 'Portfolio Website',
      description: 'Home page meta description',
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Cat Portfolio'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'A portfolio of cat photography with images and video.'
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: '/cat-portfolio.jpg'
        }
      ]
    }
  },
  components: {
    LayerComponent
  },
  computed: {
    projects() {
      return this.$store.state.projects.all.filter(
        project => project.isFeatured
      )
    }
  }
}
</script>

<style lang="scss">
// /* Transitions using the page hook */
// .page-enter-active,
// .page-leave-active {
//   transition: all 0.3s ease;
// }
// .page-enter,
// .page-leave-active {
//   opacity: 0;
//   transform-origin: 50% 50%;
// }
// .page-enter-active {
//   animation: acrossIn 0.2s ease both;
// }
// .page-leave-active {
//   animation: acrossOut 0.4s ease both;
// }
// @keyframes acrossIn {
//   0% {
//     transform: translate3d(-100%, 0, 0);
//   }
//   100% {
//     transform: translate3d(0, 0, 0);
//   }
// }
// @keyframes acrossOut {
//   0% {
//     transform: translate3d(0, 0, 0);
//   }
//   100% {
//     transform: translate3d(100%, 0, 0);
//   }
// }
</style>
