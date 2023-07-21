<script setup lang="ts">

const {to, hollow} = defineProps<{
  to: string
  hollow?: boolean
}>();
</script>

<template>
  <RouterLink :to="to">
    <button :class="{ 'hollow': hollow }">
      <slot>Ok</slot>
    </button>
  </RouterLink>
</template>

<style scoped>
button {
  margin: 1rem 1rem;
  width: 14rem;
  background-color: var(--neutral-100);
  border-radius: 1.2rem;
  border: 1px solid transparent;
  padding-right: 1rem;
  font-family: Inter, serif;
  color: var(--neutral-1000);
  font-weight: 400;
  font-size: 1.2rem;
  height: 3rem;
}

button.hollow {
  margin: 1rem 1rem;
  width: 14rem;
  background-color: var(--neutral-1000);
  border-radius: 1.2rem;
  border: 1px solid var(--brand-500);
  padding-right: 1rem;
  font-family: Inter, serif;
  color: var(--brand-500);
  font-weight: 400;
  font-size: 1.2rem;
  height: 3rem;
}

button a:hover::after {
  transform-origin: left;
  transform: scaleX(1);
}

button:hover {
  color: var(--neutral-100);
  background-color: var(--brand-500);
  transition: all 0.3s;
  cursor: pointer;
}
</style>