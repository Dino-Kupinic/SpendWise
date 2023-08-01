<script setup lang="ts">

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
  letter-spacing: -0.02em;
  line-height: 1.3;
  color: var(--neutral-400);
}

@media only screen and (max-width: 600px) {
  h2 {
    font-size: 1.2rem;
  }
}
</style>