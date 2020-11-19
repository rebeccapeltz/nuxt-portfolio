<template lang="html">
  <div class="inner-column">
    <cld-image v-if="project.media === 'image'" :publicId="project.publicId">
      <cld-transformation
        crop="pad"
        background="auto:border"
        height="500"
        width="1200"
        :alt="project.title"
      />
    </cld-image>
    <VideoPlayerComponent v-if="project.media === 'video'" :project="project" />

    <h2 class="title">{{ project.title }}</h2>

    <p>{{ project.content }}</p>
  </div>
</template>

<script>
import VideoPlayerComponent from '~/components/VideoPlayerComponent.vue'
export default {
  components: {
    VideoPlayerComponent
  },
  data() {
    return {
      slug: this.$route.params.slug,
      cld: null, // Cloudinary object,
      demoPlayer: null // video player
    }
  },
  head() {
    return {
      title: this.project.title,
      description: this.project.content,
      script: [
        {
          src:
            'https://unpkg.com/cloudinary-core/cloudinary-core-shrinkwrap.min.js'
        },
        {
          src:
            'https://unpkg.com/cloudinary-video-player/dist/cld-video-player.min.js'
        }
      ],
      meta: [
        {
          name: 'twitter:title',
          content: this.project.title
        },
        {
          name: 'twitter:description',
          content: this.project.content
        },
        {
          name: 'twitter:image',
          content: 'http://placehold.it/1200x600'
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image'
        }
      ]
    }
  },

  created: function() {
    console.log('slug created')
  },
  computed: {
    project() {
      return this.$store.state.projects.all.find(
        project => project.slug === this.slug
      )
    },
    relatedProjects() {
      return this.$store.state.projects.all.filter(
        project => project.slug !== this.slug
      )
    }
  }
}
</script>

<style lang="css" scoped>
.page-enter-active {
  animation: acrossIn 0.4s ease-out both;
}
.page-leave-active {
  animation: acrossOut 0.6s ease-in both;
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
}
</style>
