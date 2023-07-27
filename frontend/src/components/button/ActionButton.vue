<script setup lang="ts">
interface Props {
  margin?: string,
  width?: string,
  hollow?: boolean,
  glow?: boolean
}

withDefaults(defineProps<Props>(), {
  margin: "0.5rem 0.5rem",
  width: "auto",
  hollow: false,
})
</script>

<template>
  <button :class="{ 'hollow': hollow, 'glow': glow }">
    <slot></slot>
  </button>
</template>

<style scoped>
button {
  margin: v-bind(margin);
  width: v-bind(width);
  background-color: var(--neutral-100);
  border-radius: 1.2rem;
  border: 1px solid transparent;
  font-family: Inter, serif;
  color: var(--neutral-1000);
  font-weight: 400;
  font-size: 1rem;
  height: 2rem;
}

.hollow {
  background-color: var(--neutral-1000);
  border-radius: 1.2rem;
  border: 1px solid var(--brand-500);
  font-family: Inter, serif;
  color: var(--brand-500);
  font-weight: 400;
  font-size: 1rem;
  height: 2rem;
}

.glow:hover {
  -webkit-box-shadow: 0 0 139px 4px rgba(18, 142, 237, 0.71);
  -moz-box-shadow: 0 0 139px 4px rgba(18, 142, 237, 0.71);
  box-shadow: 0 0 139px 4px rgba(18, 142, 237, 0.71);
}

button:hover {
  color: var(--neutral-100);
  background-color: var(--brand-500);
  transition: all 0.3s;
  cursor: pointer;
}
</style>