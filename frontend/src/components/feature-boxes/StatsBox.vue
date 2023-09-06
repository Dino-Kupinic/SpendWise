<script setup lang="ts">

import HighlightText from "@/components/text/HighlightText.vue"
import BodyText from "@/components/text/BodyText.vue"
</script>

<template>
<div>
  <HighlightText>
    <slot name="main"></slot>
  </HighlightText>
  <BodyText font-size="1rem">
    <slot></slot>
  </BodyText>
</div>
</template>

<style scoped>
div {
  border-radius: 2rem;
  padding: 1rem;
  width: auto;
}
</style>