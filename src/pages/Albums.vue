<template>
  <div class="About">
    <div class="content">

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
  background: #0f3854;
  background: radial-gradient(ellipse at center, #0a2e38 25%, #000000 105%);
  background-size: 100%;
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
  ::v-deep{
    .typed-element{
      display: block;
    }
  }
}
</style>
