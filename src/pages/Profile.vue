<template>
  <div class="MyProfile">
    <div class="main">
      <h3>Welcome</h3>
      <p>{{ user.displayFirstName }} {{user.displayLastName}}</p>
    </div>

    <button
      type="submit"
      class="btn btn-dark btn-lg btn-block"
      @click="logOut()"
    >
      Log out
    </button>
  </div>
</template>

<script>
import firebase from "firebase/compat/app";
export default {
  data: () => ({
    user: null,
  }),
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
      } else {
        this.user = null;
      }
    });
  },

  methods: {
    logOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          firebase.auth().onAuthStateChanged(() => {
            this.$router.push("/");
          });
        });
    },
  },
}
</script>

<style scoped lang="scss">
.MyProfile{
  background-image: url("../assets/images/portfolio-background.png");
  width: 100%;
  height: 100vh;
}
.main{
  padding-top: 20px;
  h3{
    color: white;
    font-size: 30px;
  }
}
</style>
