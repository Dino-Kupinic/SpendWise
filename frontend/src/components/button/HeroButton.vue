<script setup lang="ts">
import GoogleIcon from "@/components/util/GoogleIcon.vue";

const props = defineProps<{
  text: string,
  to: string
  icon: string,
}>();
</script>

<template>
  <RouterLink :to="props.to">
    <button>
      <GoogleIcon :name="props.icon" font-size="1.4rem"></GoogleIcon>
      {{ props.text }}
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