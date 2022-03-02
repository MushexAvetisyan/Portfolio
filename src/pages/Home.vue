<template>
  <div class="home">
    <div class="main">
      <div class="content">
        <h1>Home</h1>
        <h2>sd</h2>
      </div>
    </div>
    <Particle />
  </div>
</template>

<script>
import Particle from "@/components/Animation/Particle";
export default {
  name: "Home",
  components: {
    Particle
  },
};
</script>

<style scoped lang="scss">
.main {
  position: absolute;
  width: 100%;
}
.content{
  position: absolute;
  padding: 50px;
  h1{
    color: white;
  }
}
</style>
