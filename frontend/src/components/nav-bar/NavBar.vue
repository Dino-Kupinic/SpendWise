<script setup lang="ts">

import NavElement from "@/components/nav-bar/NavElement.vue";
import Logo from "@/components/util/Logo.vue";
</script>

<template>
  <nav>
    <ul>
      <li class="toggle-button">
        <span></span>
        <span></span>
        <span></span>
      </li>
      <li class="logo-container">
        <Logo></Logo>
      </li>
      <NavElement title="Home" link="/" icon="Home"></NavElement>
      <NavElement title="Home" link="/" icon="Home"></NavElement>
      <NavElement title="Pricing" link="/" icon="Home"></NavElement>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  background: rgba(3, 3, 3, 0.48);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(9px);
  -webkit-backdrop-filter: blur(9px);
  position: fixed;
}

ul {
  margin: 0;
  list-style: none;
  display: flex;
  align-items: center;
  height: 100%;
}

.logo-container {
  margin-right: auto;
  align-items: center;
  display: flex;
  height: 100%;
}

@media only screen and (min-width: 600px) {
  nav {
    top: 0;
    width: 100vw;
    height: 5rem;
  }

  ul {
    padding-left: 5rem;
    padding-right: 5rem;
  }
}

@media only screen and (max-width: 600px) {
  nav {
    top: 0;
    width: 100vw;
    height: 4rem;
  }

  ul {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
</style>