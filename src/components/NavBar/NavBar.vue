<template>
  <div id="nav" class="menu-hover-fill">
    <ul>
      <li v-for="item in navBars" :key="item.id">
        <router-link :to="{ path: item.router }">{{
            item.names.toUpperCase()
          }}</router-link>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  data: () => ({
    navBars: [
      { names: "Home", router: "/", id: 1 },
      { names: "About", router: "/About", id: 2 },
      { names: "Experience", router: "/Experience", id: 3 },
      { names: "My Works", router: "/Works", id: 4 },
      { names: "Skills", router: "/Skills", id: 5 },
      { names: "Contact", router: "/Contact", id: 5 },
      { names: "Registration", router: "/Registration", id: 6}
    ],
  }),
}
</script>

<style scoped lang="scss">
#nav {
  background-image: url("../../assets/images/portfolio-background.png");
  width: 100%;
  padding: 30px;
  margin: 0;
  a {
    font-weight: bold;
    color: #f0efeb;
    text-decoration-line: none;
    &:hover {
      transition: 0.3s;
      text-shadow: 0 0 1px limegreen, 0 0 1px gold;
    }
    &.router-link-exact-active {
      color: #42b983;
    }
  }
  ul {
    display: flex;
    justify-content: space-around;
    li {
      list-style-type: none;
    }
  }
}
</style>
