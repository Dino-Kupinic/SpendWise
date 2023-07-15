<script setup lang="ts">
defineProps({
  text: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <h4>{{ text }}</h4>
</template>

<style scoped>
h4 {
  font-family: "Roboto", serif;
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 1px;
  line-height: 1.2;
  color: var(--white);
}

h4:hover {
  color: var(--tertiary-blue);
  transition: all 0.3s;
}
</style>