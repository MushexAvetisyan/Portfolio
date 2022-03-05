<template>
  <div class="main">
    <div class="container">
      <router-link to="/" class="neon1">Go Home Page</router-link>
      <div class="neon">Error </div>
      <div class="flux">404 </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "404",
  data: () => ({}),
};
</script>

<style scoped lang="scss">
.main {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
  display: table;
  background-color: black;
}

@font-face {
  font-family: neon;
  src: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/707108/neon.ttf);
}

.container {
  text-align: center;
  margin-top: 8%;
}

.neon {
  font-family: neon;
  color: #FB4264;
  font-size: 9vw;
  line-height: 9vw;
  text-shadow: 0 0 3vw #F40A35;
}
.neon1{
  font-family: neon;
  color: #FB4264;
  cursor: pointer;
  font-size: 2vw;
  line-height: 5vw;
  text-shadow: 0 0 3vw #F40A35;
}

.flux {
  font-family: neon;
  color: #426DFB;
  font-size: 9vw;
  line-height: 9vw;
  text-shadow: 0 0 3vw #2356FF;
}

.neon {
  animation: neon 1s ease infinite;
  -moz-animation: neon 1s ease infinite;
  -webkit-animation: neon 1s ease infinite;
}
.neon1{
  animation: neon 1s ease infinite;
  -moz-animation: neon 1s ease infinite;
  -webkit-animation: neon 1s ease infinite;
}

@keyframes neon {
  0%,
  100% {
    text-shadow: 0 0 1vw #FA1C16, 0 0 3vw #FA1C16, 0 0 10vw #FA1C16, 0 0 10vw #FA1C16, 0 0 .4vw #FED128, .5vw .5vw .1vw #806914;
    color: #FED128;
  }
  50% {
    text-shadow: 0 0 .5vw #800E0B, 0 0 1.5vw #800E0B, 0 0 5vw #800E0B, 0 0 5vw #800E0B, 0 0 .2vw #800E0B, .5vw .5vw .1vw #40340A;
    color: #806914;
  }
}

.flux {
  animation: flux 2s linear infinite;
  -moz-animation: flux 2s linear infinite;
  -webkit-animation: flux 2s linear infinite;
  -o-animation: flux 2s linear infinite;
}

@keyframes flux {
  0%,
  100% {
    text-shadow: 0 0 1vw #1041FF, 0 0 3vw #1041FF, 0 0 10vw #1041FF, 0 0 10vw #1041FF, 0 0 .4vw #8BFDFE, .5vw .5vw .1vw #147280;
    color: #28D7FE;
  }
  50% {
    text-shadow: 0 0 .5vw #082180, 0 0 1.5vw #082180, 0 0 5vw #082180, 0 0 5vw #082180, 0 0 .2vw #082180, .5vw .5vw .1vw #0A3940;
    color: #146C80;
  }
}
</style>
