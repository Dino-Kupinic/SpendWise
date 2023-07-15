<script setup lang="ts">
import MenuNavigationText from "@/components/text/MenuNavigationText.vue";

defineProps({
  title: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  icon: String,
});
</script>

<template>
  <li>
    <RouterLink class="routerLink" :to=link>
      <MenuNavigationText :text="title"></MenuNavigationText>
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