import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "Home" */ "../views/Home.vue")
  },
  {
    path: "/primero",
    name: "Primero",
    component: () =>
      import(/* webpackChunkName: "VistaUno" */ "../views/VistaUno.vue")
  },
  {
    path: "/segundo",
    name: "Segundo",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "VistaDos" */ "../views/VistaDos.vue")
  },
  {
    path: "/tercero",
    name: "Tercero",
    component: () =>
      import(/* webpackChunkName: "VistaTres" */ "../views/VistaTres.vue")
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
