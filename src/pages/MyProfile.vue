<template>
  <div class="MyProfile">
    <h3>Welcome</h3>
    <p>{{ user.displayName }}</p>
    <p>{{ user.email }}</p>

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

</style>
