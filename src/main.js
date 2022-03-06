import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueParticles from 'vue-particles'
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas, faS } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import VueTypedJs from 'vue-typed-js'


Vue.config.productionTip = false
Vue.use(VueParticles)
Vue.use(VueTypedJs)
Vue.component("font-awesome-icon", FontAwesomeIcon);
library.add(fas);
library.add(far);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


