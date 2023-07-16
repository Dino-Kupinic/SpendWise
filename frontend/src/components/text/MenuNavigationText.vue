<script setup lang="ts">
const props = defineProps<{
  text: string
}>();
</script>

<template>
  <h4>{{ props.text }}</h4>
</template>

<style scoped>
h4 {
  font-family: "Roboto", serif;
  font-weight: 400;
  letter-spacing: 1px;
  line-height: 1.2;
  color: var(--neutral-200);
}

h4:hover {
  color: var(--brand-500);
  transition: all 0.3s;
}
</style>