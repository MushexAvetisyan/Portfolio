<template>
  <div class="Particle">
    <vue-particles
        color="#72efdd"
        :particleOpacity="0.5"
        :particlesNumber="80"
        shapeType="edge"
        :particleSize="5"
        linesColor="#f7ede2"
        :linesWidth="1"
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
