import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../pages/Home.vue")
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../pages/About.vue"),
  },
  {
    path: "/Experience",
    name: "Experience",
    component: () => import("../pages/Experience.vue"),
  },
  {
    path: "/Works",
    name: "Works",
    component: () => import("../pages/Works.vue"),
  },
  {
    path: "/Contact",
    name: "Contact",
    component: () => import("../pages/Contact.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
