<template lang="html">
  <section class="layout-grid">
    <GridCard v-if="items" v-for="item in items" :key="item.id" :item="item"/>
  </section>
</template>

<script>
import GridCard from '~/components/GridCard.vue'

export default {
  props: ['items'],
  components: {
    GridCard,
  },
}
</script>

<style lang="scss" scoped>
</style>
