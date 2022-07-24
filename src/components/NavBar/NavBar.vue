<template>
  <div id="nav" class="menu-hover-fill">
    <ol start="0">
      <li>
        <img src="../../assets/Screenshot.png" alt="">
      </li>
      <li v-for="item in navBars" :key="item.id">
        <router-link :to="{ path: item.router }">{{
          item.names.toUpperCase()
        }}</router-link>
      </li>
      <li id="clock">
        <div class="myclock">
          <div id="time">
            <span id="hours">{{hours}}</span><span id="min">{{minutes}}</span><span id="sec">{{sec}}</span> <span id="ampm">{{ampm}}</span>
          </div>
          <div id='days'>
            <div class="days" v-for="day in days" v-bind:class="{active:day.active}">{{day.text}}</div>
          </div>
          <div id="fullDate">
            <span id="month">{{month}}</span>&nbsp;<span id="date">{{date}}</span>&nbsp;<span id="year">{{year}}</span>
          </div>
        </div>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  data: () => ({
    navBars: [
      { names: "Home", router: "/", id: 2 },
      { names: "Albums", router: "/Albums", id: 3 },
      { names: "Videos", router: "/Videos", id: 4 },
      { names: "Music", router: "/Music", id: 5 },
      { names: "Skills", router: "/Skills", id: 6 },
      { names: "Contact", router: "/Contact", id: 7 },
    ],
    days: [
      {text:"sun", active: false},
      {text:"mon", active: false},
      {text:"tue", active: false},
      {text:"wed", active: false},
      {text:"thu", active: false},
      {text:"fri", active: false},
      {text:"sat", active: false}
    ],
    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    ampm:'',
    hours: '',
    minutes:'',
    sec: '' ,
    month:'',
    date: '',
    year: ''
  }),
  components: {
  },
  methods: {
    startClock:function(){
      var THIS = this;

      setInterval(function () {
        var a = new Date().getTime() / 1e3,
            b = new Date,
            c = b.getHours(),
            d = b.getMinutes(),
            e = b.getSeconds(),
            f = b.getMilliseconds(),
            g = f.toString().slice(0, -2),
            h = b.getDay(),
            i = 12 <= c ? 'PM' : 'AM',
            j = b.getMonth(),
            k = b.getDate(),
            l = b.getFullYear();
        THIS.$data.ampm = i;
        12 < c && (c %= 12),
        0 == c && (c = 12),
        9 >= e && (e = '0' + e),
        9 >= d && (d = '0' + d),
            THIS.$data.hours = c,
            THIS.$data.minutes = `:${d}:`,
            THIS.$data.sec = e,
            THIS.$data.month = THIS.$data.months[j],
            THIS.$data.date = k,
            THIS.$data.year = l;
        THIS.$data.days[h].active = true;
      }, 100)
    }
  },
  created() {
    this.startClock();
  }
};
</script>

<style scoped lang="scss">
$glow:0px 2px 25px rgba(144, 244, 253, .6);
$paleturquoise:#afeeee;
$backgroundDark:#222222;
$grey:#444444;
#nav {
  //background-image: url("../../assets/images/portfolio-background.png");
  width: 100%;
  padding: 30px;
  margin: 0;
  background: black;
  //background: radial-gradient(ellipse at center, #0a2e38 25%, #000000 105%)/;
  background-size: 100%;
  a {
    font-weight: bold;
    color: #f0efeb;
    text-decoration-line: none;
    &:hover {
      transition: 0.3s;
      text-shadow: 0 0 1px #0a2e38, 0 0 1px red;
    }
    &.router-link-exact-active {
      color: red;
    }
  }
  ol {
    display: grid;
    grid-template-columns: 0.2fr 0.3fr 0.2fr 0.4fr 0.2fr 0.4fr 0.2fr 0.6fr;
    grid-template-rows: 0.1fr;
    grid-template-areas: ". . . . . . . .";
    justify-items: stretch;
    align-items: center;
    li {
      list-style-type: none;
      cursor: pointer;
      img{
        width: 70px;
      }
    }
  }
}
.myclock{
  #time {
    width: 40%;
    margin: 0 auto;
    text-align: center;
    font-size: 2.5em;
    text-shadow: $glow;
    display: flex;
    color: white;
    #ampm {
      font-size: .5em;
    }
  }
  #days, #fullDate {
    width: 25%;
    margin: 0 auto;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    position: relative;
    left: 5px;
  }
  .days {
    flex: 1;
    color: white;
    text-align: center;
    margin-left: 10px;
  }

  .active {
    color: red;
    text-shadow: $glow;
  }
  #fullDate {
    margin-top:.25em;
    text-shadow: $glow;
    color: white;
  }
  #sec{
    display:inline-block;
    width:70px;
    color: red;
  }
}

</style>
