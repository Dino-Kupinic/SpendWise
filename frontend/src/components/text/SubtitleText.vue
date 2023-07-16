<script setup lang="ts">
defineProps({
  text: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <h2>{{ text }}</h2>
</template>

<style scoped>
h2 {
  font-family: "Inter", serif;
  font-weight: 400;
  letter-spacing: -0.02em;
  line-height: 1.4;
  color: var(--neutral-400);
}

h4:hover {
  color: var(--brand-400);
  transition: all 0.3s;
}
</style>