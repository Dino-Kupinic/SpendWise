<script setup lang="ts">
import NavElement from "@/components/nav-bar/NavTextElement.vue";
import Logo from "@/components/util/Logo.vue";
import NavIconElement from "@/components/nav-bar/NavIconElement.vue";
import VerticalSpacer from "@/components/nav-bar/VerticalSpacer.vue";

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
      <NavElement title="Features" link="/"></NavElement>
      <NavElement title="Docs" link="/"></NavElement>
      <NavElement title="Pricing" link="/"></NavElement>
      <NavElement title="About" link="/"></NavElement>
      <VerticalSpacer></VerticalSpacer>
      <NavIconElement link="https://github.com/Dino-Kupinic/SpendWise" icon="github"></NavIconElement>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  background: var(--neutral-1000);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(9px);
  -webkit-backdrop-filter: blur(9px);
  position: sticky;
  z-index: 100;
  border-bottom: 1px solid var(--neutral-100);
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
    width: 100%;
    height: 4rem;

  }

  ul {
    padding-left: 5rem;
    padding-right: 5rem;
  }
}

@media only screen and (max-width: 600px) {
  nav {
    top: 0;
    width: 100%;
    height: 6rem;

  }

  ul {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
</style>