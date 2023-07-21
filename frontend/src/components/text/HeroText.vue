<script setup lang="ts">
const {text, gradient, disableMargins} = defineProps<{
  text: string,
  gradient?: boolean,
  disableMargins?: boolean
}>();
</script>

<template>
  <span :class="{ color: gradient, noMargin: disableMargins}">{{ text }}</span>
</template>

<style scoped>
span {
  display: inline-block;
  font-family: "Roboto", serif;
  margin-left: 1rem;
  font-size: clamp(3rem, 10vw, 7rem);
  font-weight: 700;
  letter-spacing: -2px;
  margin-bottom: 2rem;
  color: var(--neutral-100);
}

.noMargin {
  margin: 0;
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

@media (max-width: 768px) {
  span {
    margin-bottom: 0.5rem;
  }
}
</style>