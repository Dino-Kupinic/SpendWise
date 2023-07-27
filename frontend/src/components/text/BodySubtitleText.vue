<script setup lang="ts">
import {computed} from "vue"

interface Props {
  size?: string
}

withDefaults(defineProps<Props>(), {
  size: "2rem",
})

</script>

<template>
  <h3>
    <slot></slot>
  </h3>
</template>

<style scoped>
h3 {
  display: inline;
  font-family: "Inter", serif;
  font-size: v-bind(size);
  font-weight: 500;
  line-height: 1.2;
  color: var(--neutral-100);
}

</style>