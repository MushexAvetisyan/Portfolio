<template>
  <div id="app">
    <NavBar/>
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar/NavBar";
export default {
  components: {NavBar},
  data: () => ({
  }),
};
</script>

<style lang="scss">
* {
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-x: hidden;
  background-image: url("/assets/images/portfolio-background.png");
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateX(0em);
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}
</style>
