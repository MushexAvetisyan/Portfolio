<template>
  <div class="contact">
    <div class="flex-center">
      <a href="https://github.com/MushexAvetisyan" target="_blank"><i class="uil uil-github icon-3d"></i></a>
      <a href="https://gitlab.com/MushexAvetisyan" target="_blank"><i class="uil uil-gitlab icon-3d"></i></a>
      <a href="https://www.linkedin.com/in/mushex-avetisyan-06496a22a/" target="_blank"><i class="uil uil-linkedin icon-3d"></i></a>
      <a href="https://twitter.com/MusheghWeb" target="_blank"><i class="uil uil-twitter icon-3d"></i></a>
      <a href="https://wa.me/+37494451119" target="_blank"><i class="uil uil-whatsapp icon-3d"></i></a>
      <i class="uil uil-instagram icon-3d"></i>
      <a href="https://www.facebook.com/streetart.photograph.50/" target="_blank"><i class="uil uil-facebook-f icon-3d"></i></a>
    </div>

  </div>
</template>


<script>
export default {
  data: () => ({})
}
</script>

<style scoped lang="scss">
.contact {
  background: #0f3854;
  background: radial-gradient(ellipse at center, #0a2e38 25%, #000000 105%);
  background-size: 100%;
  width: 100%;
  height: 100vh;
}

$redColor: rgba(244, 67, 54, 1);
$blueColor: rgba(33, 150, 243, 1);

.flex-center {
  width: 100%;
  display: table-caption;
  text-align: left;
  margin: 80px 0 0 30px;

  i {
    font-size: 60px;
    cursor: pointer;
  }
}

.icon-3d {
  padding: 10px;
  -webkit-animation: icon3d 200ms 10;
  animation: icon3d 200ms 10;
  color: #fff;

  &:hover {
    -webkit-animation: icon3d 200ms infinite;
    animation: icon3d 200ms infinite;
  }
}

@keyframes icon3d {
  0% {
    text-shadow: 5px 4px $redColor, -5px -6px $blueColor;
  }
  25% {
    text-shadow: -5px -6px $redColor, 5px 4px $blueColor;
  }
  50% {
    text-shadow: 5px -4px $redColor, -8px 4px $blueColor;
  }
  75% {
    text-shadow: -8px -4px $redColor, -5px -4px $blueColor;
  }
  100% {
    text-shadow: -5px 0 $redColor, 5px -4px $blueColor;
  }
}
</style>
