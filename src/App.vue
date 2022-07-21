<template>
  <div id="app">
    <transition name="fade" v-if="show">
      <div class="Welcome">
        <CircleLoader :size="200" duration="3s" :color="'#CCD6F6'" class="mm" />
      </div>
    </transition>
    <div v-show="LoaderOff">
      <NavBar />
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
import {CircleLoader} from "vue-spinners-css";
import NavBar from "@/components/NavBar/NavBar";
export default {
  components: {
    NavBar,
    CircleLoader
  },
  data: () => ({
    show: false,
    LoaderOff: true,
  }),
  mounted() {
    setTimeout(() => {
      this.show = false;
    }, 1000);
    clearTimeout(() => {
      this.LoaderOff = false;
    });
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Comfortaa&display=swap');
* {
  font-family: 'Comfortaa', cursive;
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
.Welcome{
  height: 100vh;
  background-color: #0A192F;
  position: fixed;
  z-index: 100;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
    .mm {
      position: fixed;
      top: 40%;
      left: 45%;
      right: 0;
      bottom: 0;
    }
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
