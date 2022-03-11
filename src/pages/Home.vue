<template>
  <div class="home">
    <div class="main">
      <div class="content">
        <vue-typed-js
          :strings="['Creative', 'Smart', 'Different']"
          :type-speed="50"
          :start-delay="1000"
          :back-speed="50"
          :smart-backspace="true"
          :back-delay="1500"
          :loop="true"
          :loop-count="1"
          :show-cursor="true"
        >
          <h1 class="intro">Be <span class="typing"></span></h1>
        </vue-typed-js>
      </div>
      <div class="about">
        <h2>About Me</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam,
          tempore?
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>

<style scoped lang="scss">
.main {
  background-image: url("../assets/images/portfolio-background.png");
  width: 100%;
  height: 100vh;
  display: grid;
  grid-auto-rows: 1fr;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0 0;
  grid-template-areas: ". .";
}
.content {
  margin-top: 130px;
  h1 {
    color: white;
  }
}
.about {
  text-align: left;
  width: 50%;
  height: 70px;
  //background-color: white;
  position: relative;
  top: 130px;
  border-radius: 10px;
  cursor: pointer;
  transition: width 0.9s, height 0.9s, transform 0.9s;
  h2 {
    color: white;
    font-size: 35px;
    padding: 10px;
  }
  p {
    visibility: hidden;
    opacity: 0;
    color: white;
    transition: visibility 0.3s, opacity 0.3s linear;
    padding: 0 0 0 15px;
  }
  &:hover {
    width: 50%;
    height: 130px;
    box-shadow: -4px -4px 7px #53a7ea, 4px 4px 7px #53a7ea, 4px 4px 4px #53a7ea;
    transform: translateX(5px);
    //transform: translate(50px);
    p {
      visibility: visible;
      opacity: 1;
    }
  }
}
.intro {
  font-size: 50px;
}
</style>
