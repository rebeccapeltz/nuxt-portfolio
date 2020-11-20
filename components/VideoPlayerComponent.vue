<template lang="html">
<div class="vp">
   <video v-if="project.media === 'video'"
      id="demo-player"
      controls
      autoplay
      class="cld-video-player cld-fluid">
    </video>
  </div>
</template>

<script>
// import cloudinary from "cloudinary-core";
// import cloudinaryVideoPlayer from "cloudinary-video-player";
// import "cloudinary-video-player/dist/cld-video-player.css";
export default {
  props: ['project'],
  data() {
    return {
      cld: null, //Cloudinary object,
      demoPlayer: null, //video player
    }
  },
  mounted: function () {
    // debugger
    let mediaType = this.project.media
    let cloud = process.env.cldCloud
    let publicId = this.project.publicId
    let script1 = document.createElement('script')
    script1.type = 'text/javascript'
    script1.onload = function () {
      // debugger
      let script2 = document.createElement('script')
      script2.type = 'text/javascript'
      script2.onload = function () {
        if (mediaType === 'video') {
          let cld = cloudinary.Cloudinary.new({
            cloud_name: cloud,
            secure: true,
          })
          let demoPlayer = cld.videoPlayer('demo-player')
          demoPlayer.source(publicId)
        }
      }
      script2.src = 'https://unpkg.com/cloudinary-video-player/dist/cld-video-player.min.js'
      document.querySelector('head').appendChild(script2)
    }
    script1.src = 'https://unpkg.com/cloudinary-core/cloudinary-core-shrinkwrap.min.js'
    document.querySelector('head').appendChild(script1)

    // if (this.project.media === 'video') {
    //   this.cld = cloudinary.Cloudinary.new({
    //     cloud_name: process.env.cldCloud,
    //     secure: true,
    //   })
    //   this.demoPlayer = this.cld.videoPlayer('demo-player')
    //   this.demoPlayer.source(this.project.publicId)
    // }
  },
}
</script>

<style lang="scss" scoped>
.vp {
  width: 70vw;
  margin: 2rem auto;
}
</style>
