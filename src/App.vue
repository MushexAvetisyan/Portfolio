<template>
  <div id="app">
    <div id="nav">
      <ul>
        <li v-for="item in navBars" :key="item.id">
          <router-link :to="{ path: item.router }">{{
            item.names.toUpperCase()
          }}</router-link>
        </li>
      </ul>
    </div>
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  data: () => ({
    navBars: [
        { names: 'Home', router: "/", id: 1 },
      { names: 'About', router: "/About", id: 2 },
      { names: 'Experience', router: "/Experience", id: 3 },
      { names: 'Works', router: "/Works", id: 4 },
      { names: 'Contact', router: "/Contact", id: 5 }
    ],
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
}

#nav {
  background-image: url("assets/images/portfolio-background.png");
  width: 100%;
  padding: 30px;
  margin: 0;
  a {
    font-weight: bold;
    color: #f0efeb;
    text-decoration-line: none;
 &:hover{
   color: crimson;
   transition: 0.3s;
 }
    &.router-link-exact-active {
      color: #42b983;
    }
  }
  ul{
    display: flex;
    li{
      list-style-type: none;
    }
  }
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateX(0em);
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease;
}
</style>
