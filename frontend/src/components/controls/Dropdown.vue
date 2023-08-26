<script setup lang="ts">
import {ref} from "vue"

interface Props {
  width: string
}

withDefaults(defineProps<Props>(), {
  width: "4rem",
})

const isHovered = ref(false)

function handleHover() {
  isHovered.value = true
}

function handleHoverLeave() {
  isHovered.value = false
}
</script>

<template>
  <li class="dropdown" @mouseleave="handleHoverLeave">
    <div class="name" @mouseover="handleHover">
      <slot name="name"></slot>
    </div>
    <div class="content" :class="{'show': isHovered}">
      <slot name="content"></slot>
    </div>
  </li>
</template>

<style scoped>
.dropdown {
  position: relative;
  display: inline-block;
}

.content {
  display: none;
  position: absolute;
  padding: 0.1rem;
  background-color: var(--neutral-900);
  min-width: v-bind(width);
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.content.show {
  display: block;
}
</style>