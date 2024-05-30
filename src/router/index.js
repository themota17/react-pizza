import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "main",
    meta: {},
    component: () => import("../views/Index.vue"),
  },
  {
    path: "/basket",
    name: "basket",
    component: () => import("../views/Basket.vue"),
  },
];

const router = new createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
