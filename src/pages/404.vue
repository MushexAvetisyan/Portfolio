<template>
  <div class="main">
    <h1 class="effect">ERROR 404 <router-link to="/"><span class="effect2">Go Home Page</span></router-link></h1>
  </div>
</template>

<script>
export default {
  name: "404",
  data: () => ({}),
};
</script>

<style scoped lang="scss">
@import url(https://fonts.googleapis.com/css?family=Exo+2:200i);

.main {
  font-family: "Exo 2", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000;
  min-height: 100vh;
  .effect {
    font-size: 8rem;
    font-weight: 200;
    font-style: italic;
    color: #fff;
    padding: 4rem 6rem 5.5rem;
    border: 0.4rem solid #fff;
    border-radius: 2rem;
    text-transform: uppercase;
    animation: flicker 1.5s infinite alternate;
    a {
      text-decoration-line: none;
      &.router-link-active{
        height: auto;
      }
    }
    .effect2{
      position: relative;
      bottom: 120px;
      font-size: 30px;
      font-weight: 200;
      font-style: italic;
      color: #fff;
      padding: 1rem 2rem 1.5rem;
      border: 0.4rem solid #fff;
      border-radius: 3rem;
      text-transform: uppercase;
      -webkit-animation: flicker-data-v-d989eb38 1.5s infinite alternate;
      animation: flicker-data-v-d989eb38 1.5s infinite alternate;
      cursor: pointer;
    }
  }
  .buttonStyle{
    border: 0.4rem solid #fff;
    background: none;
    font-size: 8rem;
    font-weight: 200;
    font-style: italic;
    color: #fff;
    padding: 4rem 6rem 5.5rem;
    border: 0.4rem solid #fff;
    border-radius: 2rem;
    text-transform: uppercase;
    animation: flicker 1.5s infinite alternate;
    cursor: pointer;
    a {
      color: #fff;
      text-decoration-line: none;
      &:hover {
        color: #fff;
        transition: 0.3s;

      }
    }
  }

  .effect::-moz-selection {
    background-color: #08f;
    color: #f40;
  }

  .effect::selection {
    background-color: #08f;
    color: #f40;
  }

  .effect:focus {
    outline: none;
  }
}

/* Animate neon flicker */
@keyframes flicker {
  0%,
  19%,
  21%,
  23%,
  25%,
  54%,
  56%,
  100% {
    text-shadow: -0.2rem -0.2rem 1rem #fff, 0.2rem 0.2rem 1rem #fff,
      0 0 2rem #f40, 0 0 4rem #f40, 0 0 6rem #f40, 0 0 8rem #f40, 0 0 10rem #f40;

    box-shadow: 0 0 0.5rem #fff, inset 0 0 0.5rem #fff, 0 0 2rem #08f,
      inset 0 0 2rem #08f, 0 0 4rem #08f, inset 0 0 4rem #08f;
  }

  20%,
  24%,
  55% {
    text-shadow: none;
    box-shadow: none;
  }
}
</style>
