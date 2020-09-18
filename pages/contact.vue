<template lang="html">
  <div class="inner-column">
    <h1 class="title">Contact</h1>
    <p>Contact Us Here</p>
    
<div class="social-icons">
                    <!-- <a href="" target="_blank">
                        <i class="fab fa-linkedin-in"></i>
                    </a> -->

    <a href="mailto:rebecca.peltz@cloudinary.comsubject=Portfolio" target="_blank">
        <font-awesome-icon :icon="['fas', 'envelope']" />
    </a>
    <a href="" target="_blank">
        <font-awesome-icon :icon="['fab', 'linkedin']" />
    </a>
     <a href="" target="_blank">
        <font-awesome-icon :icon="['fab', 'github']" />
    </a>

    <a href="" target="_blank">
        <font-awesome-icon :icon="['fab', 'twitter']" />
    </a>

    <a href="" target="_blank">
        <font-awesome-icon :icon="['fab', 'instagram']" />
    </a>

         <a href="" target="_blank">
        <font-awesome-icon :icon="['fab', 'medium']" />
    </a>

         <a href="" target="_blank">
        <font-awesome-icon :icon="['fab', 'npm']" />
    </a>

                </div>

  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.social-icons {
  width: 80%;
  font-size: 2rem;
  display: flex;
  justify-content: space-around;

  a {
    display: inline-block;
  }
}
</style>
