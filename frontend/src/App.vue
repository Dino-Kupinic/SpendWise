<script setup lang="ts">

import NavBar from "@/components/nav-bar/NavBar.vue"
import Footer from "@/components/footer/Footer.vue"
import {computed} from "vue"
import {useRoute} from "vue-router"

const route = useRoute()
const noNavBar = computed<boolean>(() => {
  return route.path.startsWith("/user/") || route.path.startsWith("/auth")
})
const noFooter = computed<boolean>(() => route.path.startsWith("/auth"))
</script>

<template>
  <NavBar v-if="!noNavBar"></NavBar>
  <!-- <UserNavBar v-else></UserNavBar> -->
  <RouterView></RouterView>
  <Footer v-if="!noFooter"></Footer>
</template>

<style scoped>

</style>
