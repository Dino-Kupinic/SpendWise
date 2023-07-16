<script setup lang="ts">
defineProps({
  text: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <h1>{{ text }}</h1>
</template>

<style scoped>
h1 {
  font-family: "Roboto", serif;
  font-size: 7rem;
  font-weight: 700;
  letter-spacing: -2px;
  line-height: 1.2;
  margin-bottom: 2rem;
  color: var(--neutral-100);
}

h4:hover {
  color: var(--brand-400);
  transition: all 0.3s;
}
</style>