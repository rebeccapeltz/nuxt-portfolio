<template lang="html">
  <div class="inner-column">
    <h2 class="title">About</h2>
    <section class="about">
  

    <figure>
      <figcaption>Sasha Wolffe</figcaption>
      <cld-image
        publicId="vuejs-portfolio/sasha-wolffe"
        alt="Sasha Wolffe"
      >
        <cld-transformation
          crop="fill"
          height="300"
          width="300"
          gravity="center",
          effect="sharpen:300"
        />
      </cld-image>
      
    </figure>

    <h2>Objectives</h2>
    <p class="about-text">
      Plays league of legends stare out the window. Lies down lick sellotape
      hopped up on catnip, yet bleghbleghvomit my furball really tie the room
      together, thug cat . Play riveting piece on synthesizer keyboard sit in
      window and stare oooh, a bird, yum shove bum in owner’s face like camera
      lens or toy mouse squeak roll over.
    </p>

     <h2>Experience</h2>
    <p class="about-text">
      Plays league of legends stare out the window. Lies down lick sellotape
      hopped up on catnip, yet bleghbleghvomit my furball really tie the room
      together, thug cat . Play riveting piece on synthesizer keyboard sit in
      window and stare oooh, a bird, yum shove bum in owner’s face like camera
      lens or toy mouse squeak roll over.
    </p>

    <h2>Availability</h2>

    <p class="about-text">
      Plays league of legends stare out the window. Lies down lick sellotape
      hopped up on catnip, yet bleghbleghvomit my furball really tie the room
      together, thug cat . Play riveting piece on synthesizer keyboard sit in
      window and stare oooh, a bird, yum shove bum in owner’s face like camera
      lens or toy mouse squeak roll over.
    </p>
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
p.about-text{
  margin: auto;
}
@media (min-width: 480px) {
  p.about-text {
    margin: auto 14rem;
  }
}

figure {
  width: 50%;
  height: auto;
}
section.about {
  width: 90%;
  margin: auto;
}
figure {
  width: 30%;
  margin: auto;
}
figcaption {
  font-family: 'Libre Franklin';
  text-align: center;
  margin: 1rem;
  font-size: 3rem;
}
</style>
