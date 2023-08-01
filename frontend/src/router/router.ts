import {createRouter, createWebHistory} from "vue-router"
import HomeView from "../views/HomeView.vue"
import AuthenticationView from "@/views/AuthenticationView.vue"
import NotFoundView from "@/views/NotFoundView.vue"
import User from "@/views/user/User.vue"
import UserHomeView from "@/views/user/UserHomeView.vue"
import ExpenseTrackerView from "@/views/ExpenseTrackerView.vue"
import UserProfileView from "@/views/user/UserProfileView.vue"
import NoNavBarLayout from "@/layouts/NoNavBarLayout.vue"
import DefaultLayout from "@/layouts/DefaultLayout.vue"
import NoNavBarAndFooterLayout from "@/layouts/NoNavBarAndFooterLayout.vue"
import LoginBox from "@/components/auth/LoginBox.vue"
import RegisterBox from "@/components/auth/RegisterBox.vue"

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "/",
        name: "home",
        component: HomeView,
      },
    ],
  },
  {
    path: "/",
    component: NoNavBarLayout,
    children: [
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
    ],
  },
  {
    path: "/",
    component: NoNavBarAndFooterLayout,
    children: [
      {
        path: "/auth",
        name: "authentication",
        component: AuthenticationView,
        children: [
          {
            path: "login",
            name: "login",
            component: LoginBox,
          },
          {
            path: "register",
            name: "register",
            component: RegisterBox,
          },
        ],
      },
    ],
  },
  // catch all 404
  {
    path: "/:pathMatch(.*)",
    component: DefaultLayout,
    children: [
      {
        path: "",
        name: "not found",
        component: NotFoundView,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router