<template>
  <div class="home">
    <div class="main">
      <div class="TypedContent">
        <vue-typed-js
            :strings="['Mushex', 'Full Stack Web Developer', 'Penetration Tester']"
            :type-speed="50"
            :start-delay="4000"
            :back-speed="30"
            :smart-backspace="true"
            :back-delay="1500"
            :loop="true"
            :loop-count="10"
            :show-cursor="true"
        >
          <h1 class="intro">Hey I`am <span class="typing"></span></h1>
        </vue-typed-js>
      </div>
      <div class="circle">
        <img src='../assets/images/MyPhoto.jpg' alt=''>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({}),
  name: "Home",
  components: {},
};
</script>

<style scoped lang="scss">
.main {
  width: 100%;
  height: 100vh;
  background: #0f3854;
  background: radial-gradient(ellipse at center, #0a2e38 25%, #000000 105%);
  background-size: 100%;
  display: grid;
  grid-auto-rows: 1fr;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0 0;
  grid-template-areas: ". .";
}

@import url("https://fonts.googleapis.com/css?family=Roboto:700");
@keyframes showTopText {
  0% {
    transform: translate3d(0, 100%, 0);
  }
  40%,
  60% {
    transform: translate3d(0, 50%, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}
@keyframes showBottomText {
  0% {
    transform: translate3d(0, -100%, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}
.animated-title {
  color: #222;
  font-family: Roboto, Arial, sans-serif;
  height: 90vmin;
  left: 25%;
  position: absolute;
  top: 45%;
  transform: translate(-50%, -50%);
  width: 90vmin;
}
.animated-title > div {
  height: 50%;
  overflow: hidden;
  position: absolute;
  width: 100%;
}
.animated-title > div div {
  font-size: 13vmin;
  padding: 1vmin 0;
  position: absolute;
}
.animated-title > div div span {
  display: block;
}
.animated-title > div.text-top div {
  animation: showTopText 8s;
  animation-delay: 2s;
  animation-fill-mode: forwards;
  bottom: 16px;
  transform: translate(0, 100%);
}
.animated-title > div.text-top div span:first-child {
  color: white;
}
.animated-title > div.text-top div span:nth-child(2) {
  color: limegreen;
  margin-top: 10px;
}
.animated-title > div.text-bottom {
  bottom: 0;
}
.animated-title > div.text-bottom div {
  animation: showBottomText 4s;
  animation-delay: 4.75s;
  animation-fill-mode: forwards;
  top: -20px;
  transform: translate(0, -100%);
  color: limegreen;
}
.TypedContent{
  margin-top: 15%;
  position: relative;
  left: 5%;
  h1 {
    color: white;
  }
  ::v-deep{
    .typed-element{
      display: block;
    }
  }
  .typing{
    color: red;
  }
}

.circle {
  background: plum;
  width: 220px;
  height: 220px;
  margin-top: 10%;
  border-radius: 40% 60% 70% 30%/40% 50% 60% 50%;
  overflow: hidden;
  -webkit-animation: morph-data-v-5a90ec03 3s linear infinite;
  animation: morph-data-v-5a90ec03 3s linear infinite;
}
.circle img {
  width: 100%;
}
@keyframes morph{
  0%, 100% {
    border-radius: 40% 60% 70% 30% / 40% 40% 60% 50%;
  }
  34% {
    border-radius: 70% 30% 50% 50% / 30% 30% 70% 70%;
  }
  67% {
    border-radius: 100% 60% 60% 100% / 100% 100% 60% 60%;
  }
}
</style>
