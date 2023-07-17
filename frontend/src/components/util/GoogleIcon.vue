<script setup lang="ts">
import {computed} from "vue";

interface Props {
  name: string,
  padding?: string,
  fontSize: string
}

const props = withDefaults(defineProps<Props>(), {
  padding: "0 5px 0 10px",
  fontSize: "1rem",
});

const pad = computed(() => {
  return props.padding;
});

const size = computed(() => {
  return props.fontSize;
});

</script>

<template>
  <link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"/>
  <span class="material-symbols-outlined">{{ props.name }}</span>
</template>

<style scoped>
span {
  vertical-align: bottom;
  font-size: v-bind(size);
  padding: v-bind(pad);
}

</style>