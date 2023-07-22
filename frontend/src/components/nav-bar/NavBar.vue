<script setup lang="ts">
import NavTextElement from "@/components/nav-bar/NavTextElement.vue";
import Logo from "@/components/util/Logo.vue";
import VerticalSpacer from "@/components/nav-bar/VerticalSpacer.vue";
import ActionButton from "@/components/button/ActionButton.vue";

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
      <NavTextElement title="Features" link="/"></NavTextElement>
      <NavTextElement title="Docs" link="/"></NavTextElement>
      <NavTextElement title="Pricing" link="/"></NavTextElement>
      <NavTextElement title="About" link="/"></NavTextElement>
      <VerticalSpacer></VerticalSpacer>
      <ActionButton width="6rem" :hollow="true">Login</ActionButton>
      <ActionButton width="6rem">Register</ActionButton>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  background: rgba(8, 8, 8, 0.7);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
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
    padding-right: 2.5rem;
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