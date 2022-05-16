<template>
  <div id="nav" class="menu-hover-fill">
    <ol start="0">
      <li v-for="item in navBars" :key="item.id">
        <router-link :to="{ path: item.router }">{{
          item.names.toUpperCase()
        }}</router-link>
      </li>
      <RegistrationModal />
      <LoginModal />
    </ol>
  </div>
</template>

<script>
import LoginModal from "@/components/modals/LoginModal";
import RegistrationModal from "@/components/modals/RegistrationModal";
export default {
  data: () => ({
    navBars: [
      { names: "Home", router: "/Home", id: 1 },
      { names: "Albums", router: "/Albums", id: 2 },
      { names: "Videos", router: "/Videos", id: 3 },
      { names: "Music", router: "/Music", id: 4 },
      { names: "Skills", router: "/Skills", id: 5 },
      { names: "Contact", router: "/Contact", id: 5 },
    ],
  }),
  components: {
    RegistrationModal,
    LoginModal,
  },
};
</script>

<style scoped lang="scss">
#nav {
  //background-image: url("../../assets/images/portfolio-background.png");
  width: 100%;
  padding: 30px;
  margin: 0;
  background-color: #0A192F;
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
  ol {
    display: grid;
    grid-template-columns: 0.4fr 0.4fr 0.4fr 0.4fr 0.4fr 0.4fr 0.1fr 0.1fr;
    grid-template-rows: 0.1fr;
    gap: 1px 30px;
    grid-template-areas: ". . . . . . . .";
    justify-items: stretch;
    li {
      //list-style-type: none;
    }
  }
}
</style>
