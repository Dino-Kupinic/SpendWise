<script setup lang="ts">
import {computed} from "vue"
import BodySubtitleText from "@/components/text/BodySubtitleText.vue"
import NavBar from "@/components/nav-bar/NavBar.vue"
import UserNavBar from "@/components/user-nav-bar/UserNavBar.vue"

const today = new Date()
const nowHours = today.getHours()

const MORNING = 4
const NOON = 12
const EVENING = 18

const greeting = computed(() => {
  if (nowHours >= MORNING && nowHours < NOON) {
    return "Good Morning"
  } else if (nowHours >= NOON && nowHours < EVENING) {
    return "Good Day"
  } else {
    return "Good Evening"
  }
})
</script>

<template>
  <div class="content">
    <UserNavBar></UserNavBar>
    <BodySubtitleText>{{ greeting }}, {{ $route.params.username }}.</BodySubtitleText>
    <RouterView></RouterView>
  </div>
</template>

<style scoped>
.content {
  margin: 1rem;
  width: 96.5vw;
  height: 80vh;
  padding: 1rem;
  -webkit-backdrop-filter: blur(15px);
  backdrop-filter: blur(15px);
  border-radius: 1rem;
  border: 1px solid var(--neutral-700);
  background: rgba(14, 14, 14, 0.99); /* less transparent var(--neutral-900) as of 23.09.2023, check truth of this comment in the future */
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
}
</style>