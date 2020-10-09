<template lang="html">
  <article class="layer-card">
    <div class="card-text">
      <h3>{{ item.title }}</h3>
      <p>{{ item.content }}</p>
      <nuxt-link
        class="button"
        :to="{ name: 'projects-slug', params: { slug: item.slug } }"
        ><span class="learn-btn">Learn More ...</span></nuxt-link
      >
    </div>

    <nuxt-link
      class="card-image"
      :to="{ name: 'projects-slug', params: { slug: item.slug } }"
    >
      <figure>
        <cld-image v-if="item.media === 'image'" :publicId="item.publicId" :alt="item.title">
          <cld-transformation
            crop="pad"
            background="auto:border"
            height="800"
            width="1200"
          />
        </cld-image>
        <cld-video v-if="item.media === 'video'"  :publicId="item.publicId" height="800" width="1200" format="jpg" crop="pad" background="black" >
           <cld-transformation
            crop="pad"
            background="auto:border"
            height="800"
            width="1200"
          />
          </cld-video>

        <!-- <img :src="item.thumbnail" :alt="item.title"> -->
      </figure>
    </nuxt-link>
  </article>
</template>

<script>
export default {
  props: ['item'],
}
</script>

<style lang="scss" scoped>
@media only screen and (min-width: 850px) {
  .layer-card {
    display: flex;
    justify-content: space-between;
    margin-bottom: 100px;

    &:nth-child(odd) {
      flex-direction: row-reverse;
    }
  }
  .card-image {
    width: 60%;
  }

  .card-text {
    width: 35%;
  }
  .learn-btn {
    display: inline-block;
    margin-top: 0;
    font-size: 18px;
  }
  h3 {
    padding-top: 0 !important;
  }
}
</style>
