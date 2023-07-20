<script setup lang="ts">
const props = defineProps<{
  text: string
}>();
</script>

<template>
  <h2>{{ props.text }}</h2>
</template>

<style scoped>
h2 {
  font-family: "Inter", serif;
  font-weight: 400;
  letter-spacing: -0.02em;
  line-height: 1.4;
  color: var(--neutral-400);
}
</style>