<script setup lang="ts">
import {computed} from "vue";

interface Props {
  text: string,
  size?: string
}

const props = withDefaults(defineProps<Props>(), {
  text: "",
  size: "2rem",
});

const fontSize = computed(() => {
  return props.size;
});
</script>

<template>
  <h3>{{ props.text }}</h3>
</template>

<style scoped>
h3 {
  display: inline;
  font-family: "Inter", serif;
  font-size: v-bind(fontSize);
  font-weight: 500;
  line-height: 1.2;
  color: var(--neutral-100);
}

</style>