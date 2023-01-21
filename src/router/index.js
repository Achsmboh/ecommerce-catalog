import HomePageVue from "@/views/HomePage.vue";
import UnavailableProductVue from "@/views/UnavailableProduct.vue";
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: `/`,
    name: "HomePage",
    component: HomePageVue,
  },
  {
    path: `*`,
    name: "UnavailableProduct",
    component: UnavailableProductVue,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
