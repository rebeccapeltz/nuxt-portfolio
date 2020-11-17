<template lang="html">
  <article class="item">
    <nuxt-link
      :to="{ name: 'projects-slug', params: { slug: item.slug } }"
      :key="item.slug"
    >
      <cld-image v-if="item.media === 'image'" :publicId="item.publicId" height="800" width="1200">
        <cld-transformation
          crop="pad"
          background="auto:border"
          height="800"
          width="1200",
          fetchFormat="auto",
          quality="auto"
        />
        <cld-transformation
          fetch-format="auto"
        />
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
        <cld-poster>
          <cld-transformation
            crop="pad"
            background="auto:border"
            height="800"
            width="1200",
            fetchFormat="auto",
            quality="auto"
          />
        </cld-poster>
      </cld-video>
      <!-- <cld-video
          v-if="item.media === 'video'"
          :publicId="item.publicId"
          height="800"
          width="1200"
          format="jpg"
          crop="pad"
          background="black" 
          fetchFormat="auto"
        >
          <cld-poster >
            <cld-transformation  
            crop="pad"
            background="auto:border"
            fetchFormat="auto" 
            quality="auto" 
            height="800"
            width="1200"/>
          </cld-poster>
         
        </cld-video> -->

      <h2>{{ item.title }}</h2>
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
