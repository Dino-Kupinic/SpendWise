<script setup lang="ts">

</script>

<template>
  <h3>
    <slot></slot>
  </h3>
</template>

<style scoped>
h3 {
  font-size: 2.5rem;
  letter-spacing: 0.07em;
  margin: 0.5rem;
  background-image: linear-gradient(to right, var(--success-400), var(--success-500), var(--success-500), var(--success-600), var(--success-700));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>