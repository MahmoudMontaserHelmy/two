import Vue from "vue";
import VueRouter from "vue-router";
// import { createNamespacedHelpers } from "vuex";
import Home from "../views/Home.vue";
import Abuut from "../views/About.vue";
import Helpe from "../views/Helpe.vue";
import shwo from "../views/shwo.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/helpe",
    name: "helpe",
    component: Helpe
  },
  {
    path: "/about",
    name: "About",
    component: Abuut
  },
  {
    path: "/shwo",
    name: "shwo-asd",
    component: shwo
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
