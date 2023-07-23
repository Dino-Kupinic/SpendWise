<script setup lang="ts">

</script>

<template>
  <h4>
    <slot></slot>
  </h4>
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

@media only screen and (max-width: 800px) {
  h4 {
    text-align: left;
    margin: 0;
  }
}
</style>