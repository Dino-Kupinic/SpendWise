<script setup lang="ts">

</script>

<template>
  <li class="dropdown">
    <slot class="dropdown-name" name="name"></slot>
    <div class="content">
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
  background-color: var(--neutral-900);
  min-width: 4rem;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-name:hover .content {
  display: block;
}
</style>