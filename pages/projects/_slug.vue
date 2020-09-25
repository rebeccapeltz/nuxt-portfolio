<template lang="html">
  <div class="inner-column">

    <cld-image v-if="project.media === 'image'" :publicId="project.publicId">
      <cld-transformation  crop="pad" background="auto:border" height="500" width="1200" />
    </cld-image>

    <cld-video v-if="project.media === 'video'" controls :publicId="project.publicId" 
      :poster="project.banner">
        <cld-transformation  crop="pad" background="blurred" height="500" width="1200" />
    </cld-video>

    <h1 class="title">{{project.title}}</h1>

    <p>{{project.content}}</p>
  </div>

</template>

<script>
import Cloudinary, { CldImage } from "cloudinary-vue";

export default {
  head() {
    return {
      title: this.project.title,
      description: this.project.content,
      meta: [
        {
          name: "twitter:title",
          content: this.project.title,
        },
        {
          name: "twitter:description",
          content: this.project.content,
        },
        {
          name: "twitter:image",
          content: "http://placehold.it/1200x600",
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
      ],
    };
  },
  data() {
    return {
      slug: this.$route.params.slug,
    };
  },
  // created: function(){
  // const url = this.$cloudinary()
  //                 .url('sample', { crop: 'scale', width: 200 })
  //                 console.log(url)
  //   },
  computed: {
    project() {
      return this.$store.state.projects.all.find(
        (project) => project.slug === this.slug
      );
    },
    relatedProjects() {
      return this.$store.state.projects.all.filter(
        (project) => project.slug !== this.slug
      );
    },
  },
};
</script>

<style lang="css" scoped>
/* .page-enter-active {
    animation: acrossIn .40s ease-out both;
  }
  .page-leave-active {
    animation: acrossOut .60s ease-in both;
  }
  @keyframes acrossIn {
    0% {
      transform: translate3d(-100%, 0, 0);
    }
    100% {
      transform: translate3d(0, 0, 0);
    }
  }
  @keyframes acrossOut {
    0% {
      transform: translate3d(0, 0, 0);
    }
    100% {
      transform: translate3d(100%, 0, 0);
    }
  } */
</style>
