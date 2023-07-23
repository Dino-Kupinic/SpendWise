<script setup lang="ts">
interface Props {
  width?: string,
  height?: string
}

withDefaults( defineProps<Props>(), {
  width: "100%",
  height: "1rem",
});
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