<script setup lang="ts">
const emit = defineEmits(["active-click"])
</script>

<template>
  <div @click="emit('active-click')" class="toggle-button">
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<style scoped>
.toggle-button {
  margin-left: 90%;
  top: 1.4rem;
  position: absolute;
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 1.75rem;
  height: 1rem;
}

.toggle-button:hover span {
  background-color: var(--brand-500);
  -webkit-box-shadow: 0 0 139px 4px rgba(18, 142, 237, 0.71);
  -moz-box-shadow: 0 0 139px 4px rgba(18, 142, 237, 0.71);
  box-shadow: 0 0 139px 8px rgba(18, 142, 237, 0.71);
}

.toggle-button span {
  width: 100%;
  height: 3px;
  background-color: var(--brand-100);
  border-radius: 0.5rem;
}

@media only screen and (max-width: 800px) {
  .toggle-button {
    display: flex;
  }
}
</style>