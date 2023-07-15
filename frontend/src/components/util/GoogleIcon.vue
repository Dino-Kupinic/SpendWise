<script setup lang="ts">
defineProps({
  name: String,
  padding: {
    type: String,
    default: "0 5px 0 10px"
  }
});
</script>

<template>
  <link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"/>
  <span class="material-symbols-outlined">{{ name }}</span>
</template>

<style scoped>
span {
  vertical-align: bottom;
  font-size: 1rem;
  padding: v-bind(padding);
}

</style>