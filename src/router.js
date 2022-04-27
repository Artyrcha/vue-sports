import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/pages/IndexPage"),
  },
  {
    path: "/football",
    component: () => import("@/pages/FootballPage"),
  },
  {
    path: "/football/league/:id",
    component: () => import("@/pages/LeaguePage"),
  },
  {
    path: "/formula",
    component: () => import("@/pages/FormulaPage"),
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;
