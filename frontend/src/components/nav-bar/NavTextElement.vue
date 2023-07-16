<script setup lang="ts">
import MenuNavigationText from "@/components/text/MenuNavigationText.vue";

const props = defineProps<{
  title: string,
  link: string,
}>();
</script>

<template>
  <li>
    <RouterLink class="routerLink" :to="props.link">
      <MenuNavigationText :text="props.title"></MenuNavigationText>
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