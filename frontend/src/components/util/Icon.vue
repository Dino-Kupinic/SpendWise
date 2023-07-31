<script setup lang="ts">
import {computed} from "vue"

const props = defineProps<{
  name: string
}>()

const imgSrc = computed(() => {
  return new URL(`../../assets/img/${props.name}.svg`, import.meta.url).href
})
</script>

<template>
  <div>
    <img :src="imgSrc" alt="Icon">
    <slot></slot>
  </div>
</template>

<style scoped>
img {
  width: 1.5rem;
  height: 1.5rem;
  padding: 0;
}

img:hover {
  opacity: 80%;
}

</style>