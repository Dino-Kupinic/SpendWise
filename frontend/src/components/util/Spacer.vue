<script setup lang="ts">
const {width = "1rem", height = "100%"} = defineProps<{
  width?: string,
  height?: string
}>();
</script>

<template>
<div>
  <slot></slot>
</div>
</template>

<style scoped>
div {
  width: v-bind(width);
  height: v-bind(height);
}
</style>