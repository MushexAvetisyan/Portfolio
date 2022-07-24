<template>
  <div id="app">
    <transition name="fade" v-if="show">
        <div class="loading">
          <div class="loading-text">
            <span class="loading-text-words">L</span>
            <span class="loading-text-words">O</span>
            <span class="loading-text-words">A</span>
            <span class="loading-text-words">D</span>
            <span class="loading-text-words">I</span>
            <span class="loading-text-words">N</span>
            <span class="loading-text-words">G</span>
          </div>
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
    show: true,
    LoaderOff: true,
  }),
  mounted() {
    setTimeout(() => {
      this.show = false;
    }, 3000);
    clearTimeout(() => {
      this.LoaderOff = true;
    });
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Comfortaa&display=swap');
* {
  font-family: 'Quattrocento Sans', sans-serif;
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
@import url(https://fonts.googleapis.com/css?family=Quattrocento+Sans);

@mixin position-center($text-align: center) {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  text-align: $text-align;
}

.loading {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000;
  z-index: 9999;
}

.loading-text {
  @include position-center;
  width: 100%;
  height: 100px;
  line-height: 100px;
  span {
    display: inline-block;
    margin: 0 5px;
    color: #fff;
    font-family: 'Quattrocento Sans', sans-serif;
    font-size: 50px;
    @for $i from 0 through 6 {
      &:nth-child(#{$i + 1}) {
        filter: blur(0px);
        animation: blur-text 1.5s (#{$i/5})+s infinite linear alternate;
      }
    }
  }
}

@keyframes blur-text {
  0% {filter: blur(0px);}
  100% {filter: blur(6px);}
}
</style>
