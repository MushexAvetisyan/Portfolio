import Vue from "vue";
import VueRouter from "vue-router";
import NotFound from "../pages/404.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", name: "Home", component: () => import("../pages/Home.vue") },
  {
    path: "/Albums",
    name: "Albums",
    component: () => import("../pages/Albums.vue"),
  },
  {
    path: "/Videos",
    name: "Videos",
    component: () => import("../pages/Videos.vue"),
  },
  {
    path: "/Music",
    name: "Music",
    component: () => import("../pages/Music.vue"),
  },
  {
    path: "/Contact",
    name: "Contact",
    component: () => import("../pages/Contact.vue"),
  },
  {
    path: "/Skills",
    name: "Skills",
    component: () => import("../pages/Skills.vue"),
  },
  { path: "*", name: "404", component: NotFound },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
