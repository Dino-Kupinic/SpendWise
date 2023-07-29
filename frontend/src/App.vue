<script setup lang="ts">

import NavBar from "@/components/nav-bar/NavBar.vue"
import Footer from "@/components/footer/Footer.vue"
import UserNavBar from "@/components/user-nav-bar/UserNavBar.vue"
import {computed} from "vue"
import {useRoute} from "vue-router"

const route = useRoute()
const noNavBar = computed<boolean>(() => route.path.startsWith("/user/"))

</script>

<template>
  <NavBar v-if="!noNavBar"></NavBar>
  <UserNavBar v-else></UserNavBar>
  <RouterView></RouterView>
  <Footer></Footer>
</template>

<style scoped>

</style>
