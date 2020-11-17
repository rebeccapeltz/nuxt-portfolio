<template lang="html">
  <div class="inner-column">
    <2 class="title">Upload Widget</h2>
    <p>Upload Images and Video</p>
    <button v-on:click="openWidget" class="cloudinary-button">
      Upload files
    </button>
    <img
      v-if="uploadedImage"
      :src="uploadedImage.secure_url"
      alt="Uploaded Image"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      uploadWidget: null,
      uploadedImage: null,
    }
  },
  methods: {
    openWidget: function (event) {
      this.uploadWidget.open()
    },
  },
  mounted: function () {
    this.uploadWidget = cloudinary.createUploadWidget(
      {
        cloudName: process.env.cldCloud,
        uploadPreset: process.env.uploadPreset,
        sources: ['local', 'url', 'image_search'],
        googleApiKey: process.env.googleApiKey,
        searchByRights: true,
      },
      (error, result) => {
        if (!error && result && result.event === 'success') {
          console.log('Done! Here is the image info: ', result.info)
          this.uploadedImage = result.info
        }
      }
    )
    console.log(this.uploadWidget)
  },
  head() {
    return {
      title: 'Upload',
      description: 'Cloudinary Upload Widget',
      meta: [
        {
          name: 'twitter:title',
          content: 'Upload',
        },
        {
          name: 'twitter:description',
          content: 'Cloudinary Upload Widget',
        },
        {
          name: 'twitter:image',
          content: 'http://placehold.it/1200x600',
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.cloudinary-button {
  background-color: blue;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 4px 2px;
  cursor: pointer;
  font-size: 2rem;
  width: 20rem;
}
</style>
