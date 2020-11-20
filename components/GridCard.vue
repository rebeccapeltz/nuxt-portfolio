<template lang="html">
  <article class="item">
    <nuxt-link
      :to="{ name: 'projects-slug', params: { slug: item.slug } }"
      :key="item.slug"
    >
      <cld-image
        v-if="item.media === 'image'"
        :publicId="item.publicId"
        crop="pad"
        background="auto:border"
        height="800"
        width="1200"
        fetchFormat="auto"
        quality="auto"
        :alt="item.title"
      >
      </cld-image>

      <cld-video
        v-if="item.media === 'video'"
        controls
        :publicId="item.publicId"
        height="800"
        width="1200"
        crop="pad"
        fetchFormat="auto"
        background="black"
      >
        <cld-poster
          crop="pad"
          background="auto:border"
          height="800"
          width="1200"
          fetchFormat="auto"
          quality="auto"
        >
        </cld-poster>
      </cld-video>
      <h2>{{ item.title }}</h2>
    </nuxt-link>
  </article>
</template>

<script>
export default {
  props: ['item']
}
</script>

<style lang="scss" scoped></style>