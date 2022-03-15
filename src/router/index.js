import Vue from "vue";
import VueRouter from "vue-router";
import NotFound from "../pages/404.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", name: "Home", component: () => import("../pages/Home.vue") },
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
  {
    path: "/Skills",
    name: "Skills",
    component: () => import("../pages/Skills.vue"),
  },
  {
    path: "/Login",
    name: "Login",
    component: () => import("../components/Login/LoginForm.vue"),
  },
  {
    path: "/ResetPassword",
    name: "ResetPassword",
    component: () => import("../pages/RessetPassword.vue"),
  },
  {
    path: "/Registration",
    name: "Registration",
    component: () => import("../components/Registration/Registration.vue")
  },
  { path: "*", name: "404", component: NotFound },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
