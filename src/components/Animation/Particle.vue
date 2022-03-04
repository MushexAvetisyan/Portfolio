<template>
  <div class="Particle">
    <vue-particles
        color="#26de81"
        :particleOpacity="0.5"
        :particlesNumber="50"
        shapeType="polygon"
        :particleSize="5"
        linesColor="#b8e994"
        :linesWidth="2"
        :lineLinked="true"
        :lineOpacity="0.5"
        :linesDistance="100"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="repulse"
    ></vue-particles>
  </div>
</template>


<script>
export default {
  data: () => ({

  })
}
</script>

<style scoped lang="scss">
.Particle{
  background-image: url("../../assets/images/portfolio-background.png");
  width: 100%;
}
</style>
