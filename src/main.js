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
import firebase from "firebase/compat";
import 'firebase/auth';
import Vuelidate from 'vuelidate'


Vue.config.productionTip = false
Vue.use(VueParticles)
Vue.use(VueTypedJs)
Vue.use(Vuelidate)
Vue.component("font-awesome-icon", FontAwesomeIcon);
library.add(fas);
library.add(far);


const firebaseConfig = {
  apiKey: "AIzaSyD66U2VhKfth09o2h8fphRYzD3ucVEtG8w",
  authDomain: "my-world-1653d.firebaseapp.com",
  projectId: "my-world-1653d",
  storageBucket: "my-world-1653d.appspot.com",
  messagingSenderId: "1011149450295",
  appId: "1:1011149450295:web:3a25cdeb78102e8ebfe3b2",
  measurementId: "G-G5GGJ89M6T"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database();

let app

firebase.auth().onAuthStateChanged(() => {
  if(!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})



