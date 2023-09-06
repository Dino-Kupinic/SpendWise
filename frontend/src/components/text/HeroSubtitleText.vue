<script setup lang="ts">
interface Props {
  fontSpacing: string,
  fontSize: string
}

withDefaults(defineProps<Props>(), {
  fontSpacing: "-0.02em",
  fontSize: "1.5rem"
})
</script>

<template>
  <h2>
    <slot></slot>
  </h2>
</template>

<style scoped>
h2 {
  font-family: "Inter", serif;
  font-weight: 400;
  letter-spacing: v-bind(fontSpacing);
  line-height: 1.3;
  font-size: v-bind(fontSize);
  color: var(--neutral-400);
}

@media only screen and (max-width: 600px) {
  h2 {
    font-size: 1.2rem;
  }
}
</style>