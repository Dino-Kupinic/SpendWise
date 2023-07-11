<script setup lang="ts">

import NavElement from "@/components/nav-bar/NavElement.vue";
import Logo from "@/components/util/Logo.vue";
</script>

<template>
  <nav>
    <ul>
      <Logo></Logo>
      <NavElement title="Home" link="/" icon="Home"></NavElement>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  width: 100vw;
  height: 4rem;
  background: rgba(31, 31, 31, 0.48);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(9px);
  -webkit-backdrop-filter: blur(9px);
  border: 1px solid rgba(31, 31, 31, 0.27);
}
</style>