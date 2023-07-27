<script setup lang="ts">
import BodyText from "@/components/text/BodyText.vue"
import BodySubtitleText from "@/components/text/BodySubtitleText.vue"

interface Props {
  width?: string,
  height?: string
}

withDefaults(defineProps<Props>(), {
  width: "30%",
  height: "16rem",
})
</script>

<template>
  <div>
    <slot></slot>
  </div>
</template>

<style scoped>
div {
  border: 1px solid var(--neutral-100-minor);
  border-radius: 1rem;
  background: rgb(10, 34, 44);
  background: radial-gradient(circle, rgba(10, 34, 44, 1) 3%, rgba(0, 27, 38, 1) 43%, rgba(3, 3, 3, 1) 100%);
  width: v-bind(width);
  height: v-bind(height);
  padding: 2rem;
}

@media (max-width: 768px) {
  div {
    width: 100%;
    height: auto;
  }
}

@media (max-width: 1200px) {
  div {
    height: auto;
  }
}
</style>