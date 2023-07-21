<script setup lang="ts">
const {link} = defineProps<{
  link: string,
}>();
</script>

<template>
  <a :href="link" target="_blank" rel="noopener noreferrer">
    <slot></slot>
  </a>
</template>

<style scoped>
a {
  text-decoration: none;
  color: var(--brand-200);
}

a:hover {
  color: var(--brand-500);
}
</style>