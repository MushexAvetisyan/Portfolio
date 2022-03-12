<template>
  <div class="About">
    <div class="content">
      <vue-typed-js
          :strings="['Creative', 'Smart', 'Different']"
          :type-speed="50"
          :start-delay="1000"
          :back-speed="50"
          :smart-backspace="true"
          :back-delay="1500"
          :loop="true"
          :loop-count="1"
          :show-cursor="true"
      >
        <h1 class="intro">Be <span class="typing"></span></h1>
      </vue-typed-js>
    </div>
  </div>
</template>


<script>
export default {
  data: () => ({

  })
}
</script>

<style scoped lang="scss">
.About{
  background-image: url("../assets/images/portfolio-background.png");
  width: 100%;
  height: 100vh;
  display: grid;
  grid-auto-rows: 1fr;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0 0;
  grid-template-areas: ". .";
}
.intro {
  font-size: 50px;
}
.content {
  margin-top: 130px;
  h1 {
    color: white;
  }
}
</style>
