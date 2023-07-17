<script setup lang="ts">
import {computed} from "vue";

interface Props {
  width?: string,
  height?: string
}

const props = withDefaults(defineProps<Props>(), {
  width: "30%",
  height: "30rem",
});

const boxWidth = computed(() => {
  return props.width;
});
const boxHeight = computed(() => {
  return props.height;
});
</script>

<template>
  <div></div>
</template>

<style scoped>
div {
  border: 1px solid var(--neutral-100-minor);
  border-radius: 1rem;
  background: rgb(10,34,44);
  background: radial-gradient(circle, rgba(10,34,44,1) 3%, rgba(0,27,38,1) 43%, rgba(3,3,3,1) 100%);
  width: v-bind(boxWidth);
  height: v-bind(boxHeight);
}
</style>