<script setup lang="ts">
import {computed} from "vue";

interface Props {
  text: string,
  color: string
}
const props = withDefaults(defineProps<Props>(),{
  text: "",
  color: "var(--neutral-200)"
});

const fontColor = computed(() => {
  return props.color;
})
</script>

<template>
  <p>{{ props.text }}</p>
</template>

<style scoped>
p {
  font-size: 16px;
  font-family: "Inter", serif;
  font-weight: 400;
  line-height: 1.5;
  color: v-bind(fontColor);
}

</style>