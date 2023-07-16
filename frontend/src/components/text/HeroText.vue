<script setup lang="ts">
const props = defineProps<{
  text: string,
  gradient?: boolean
}>();
</script>

<template>
  <h1 :class="{ color: gradient}" >{{ props.text }}</h1>
</template>

<style scoped>
h1 {
  display: inline-block;
  font-family: "Roboto", serif;
  margin-left: 1rem;
  font-size: clamp(3rem, 10vw, 7rem);
  font-weight: 700;
  letter-spacing: -2px;
  line-height: 1.2;
  margin-bottom: 2rem;
  color: var(--neutral-100);
}

.color {
  background-image: linear-gradient(to right, #0e87b8, #3499c7, #4dacd6, #65bfe6, #7bd2f5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

h4:hover {
  color: var(--brand-400);
  transition: all 0.3s;
}
</style>