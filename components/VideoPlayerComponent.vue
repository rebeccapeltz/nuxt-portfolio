<template lang="html">
  <div class="vp">
    <video
      v-if="project.media === 'video'"
      id="demo-player"
      controls
      autoplay
      class="cld-video-player cld-fluid"
    ></video>
  </div>
</template>

<script>
export default {
  props: ['project'],
  data() {
    return {
      cld: null, //Cloudinary object,
      demoPlayer: null //video player
    }
  },
  mounted: function() {
    if (this.project.media === 'video') {
      this.cld = cloudinary.Cloudinary.new({
        cloud_name: process.env.cldCloud,
        secure: true
      })
      this.demoPlayer = this.cld.videoPlayer('demo-player')
      this.demoPlayer.source(this.project.publicId)
    }
  }
}
</script>

<style lang="scss" scoped>
.vp {
  width: 70vw;
  margin: 2rem auto;
}
</style>