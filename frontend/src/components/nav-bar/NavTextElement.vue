<script setup lang="ts">
import MenuNavigationText from "@/components/text/MenuNavigationText.vue";

const {title, link} = defineProps<{
  title: string,
  link: string,
}>();
</script>

<template>
  <li>
    <RouterLink class="routerLink" :to="link">
      <MenuNavigationText :text="title"></MenuNavigationText>
      <slot></slot>
    </RouterLink>
  </li>
</template>

<style scoped>
li {
  margin-right: 1.5rem;
  margin-left: 1.5rem;
}

.routerLink {
  text-decoration: none;
}
</style>