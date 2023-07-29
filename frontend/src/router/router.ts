import {createRouter, createWebHistory} from "vue-router"
import HomeView from "../views/HomeView.vue"
import AuthenticationView from "@/views/AuthenticationView.vue"
import NotFoundView from "@/views/NotFoundView.vue"
import User from "@/views/user/User.vue"
import UserHomeView from "@/views/user/UserHomeView.vue"
import ExpenseTrackerView from "@/views/ExpenseTrackerView.vue"
import UserProfileView from "@/views/user/UserProfileView.vue"

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
  {
    path: "/user/:username",
    name: "User",
    component: User,
    children: [
      {path: "", component: UserHomeView},
      {path: "/profile", component: UserProfileView},
      {path: "/tracker", component: ExpenseTrackerView},
    ],
  },
  // catch all 404
  {
    path: "/:pathMatch(.*)",
    name: "not found",
    component: NotFoundView,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
