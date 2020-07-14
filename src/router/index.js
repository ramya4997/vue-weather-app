import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../pages/HomePage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage
  },
  {
    path: "/city/:name",
    name: "CityWeatherDetails",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../pages/CityWeatherDetails.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
