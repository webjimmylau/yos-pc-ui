import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/common",
    name: "Common",
    // route level code-splitting
    // this generates a separate chunk (common.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "common" */ "../views/Common.vue")
  },
  {
    path: "/public",
    name: "Public",
    component: () =>
      import(/* webpackChunkName: "public" */ "../views/Public.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  linkExactActiveClass: "active"
});

export default router;
