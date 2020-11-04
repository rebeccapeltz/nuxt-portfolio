<template lang="html">
  <article class="item">
    <nuxt-link
      :to="{name: 'projects-slug', params: {slug: item.slug}}"
      :key="item.slug"
    >
    <cld-image v-if="item.media === 'image'" :publicId="item.publicId">
      <cld-transformation  crop="pad" background="auto:border" height="800" width="1200" />
    </cld-image>

    <cld-video v-if="item.media === 'video'" controls :publicId="item.publicId" height="800" width="1200"  crop="fill" >
        <cld-poster >
            <cld-transformation  crop="pad"
            background="auto:border"
            height="800"
            width="1200"/>
          </cld-poster>
    </cld-video>
      <h2>{{item.title}}</h2>
    </nuxt-link>
  </article>
</template>

<script>
export default {
  props: ['item'],
}
</script>

<style lang="scss" scoped>
</style>
