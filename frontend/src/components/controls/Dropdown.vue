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
  <li class="dropdown" >
    <div class="name" @mouseover="handleHover">
      <slot name="name"></slot>
    </div>
    <div class="content" :class="{'show': isHovered}" @mouseleave="handleHoverLeave">
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
  opacity: 0;
  height: 0;
  position: absolute;
  padding: 0.1rem;
  margin-top: 0.5rem;
  background-color: var(--neutral-900);
  min-width: v-bind(width);
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  z-index: 1;
  border: 1px solid var(--neutral-800);
  border-radius: 1rem;
  transition: all 0.15s;
}

.content.show {
  opacity: 1;
  height: auto;
}
</style>