<template lang="html">
  <div class="inner-column">
    <h2 class="title">Projects</h2>
    <GridComponent :items="projects"/>
  </div>
</template>

<script>
import GridComponent from '~/components/GridComponent.vue'

export default {
  head() {
    return {
      title: 'Projects | Portfolio Website',
    }
  },
  components: {
    GridComponent,
  },
  pageTransition: {
    name: 'test',
    mode: 'out-in',
  },
  computed: {
    projects() {
      return this.$store.state.projects.all
    },
  },
}
</script>

<style lang="scss" scoped>

</style>
