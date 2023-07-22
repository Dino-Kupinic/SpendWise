import {createRouter, createWebHistory} from "vue-router";
import HomeView from "../views/HomeView.vue";
import AuthenticationView from "@/views/AuthenticationView.vue";
import NotFoundView from "@/views/NotFoundView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/auth",
    name: "authentication",
    component: AuthenticationView,
  },
  // catch all 404
  {
    path: "/:pathMatch(.*)",
    name: "not found",
    component: NotFoundView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
