<script setup lang="ts">
import NavTextElement from "@/components/nav-bar/NavTextElement.vue";
import Logo from "@/components/util/Logo.vue";
import VerticalSpacer from "@/components/nav-bar/VerticalSpacer.vue";
import ActionButton from "@/components/button/ActionButton.vue";
import {ref} from "vue";

const isActive = ref(false);

</script>

<template>
  <nav>
    <div @click="isActive = !isActive" class="toggle-button">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <ul>
      <li class="logo-container">
        <Logo></Logo>
      </li>
      <NavTextElement :class="{'active': isActive}" class="nav-elem" link="/">Features</NavTextElement>
      <NavTextElement :class="{'active': isActive}" class="nav-elem" link="/">Docs</NavTextElement>
      <NavTextElement :class="{'active': isActive}" class="nav-elem" link="/">Pricing</NavTextElement>
      <NavTextElement :class="{'active': isActive}" class="nav-elem" link="/">About</NavTextElement>
      <VerticalSpacer></VerticalSpacer>
      <ActionButton :class="{'active': isActive}" class="btn-elem" width="6rem" :hollow="true" :glow="true">
        Login
      </ActionButton>
      <ActionButton :class="{'active': isActive}" class="btn-elem" width="6rem" :glow="true">
        Register
      </ActionButton>
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
    height: 4rem;
  }

  ul {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}

@media only screen and (max-width: 900px) {
  ul {
    padding-left: 1rem;
  }
}

@media only screen and (max-width: 800px) {
  .toggle-button {
    display: flex;
  }

  .logo-container {
    padding-top: 0.5rem;
    padding-left: 1rem;
  }

  nav {
    flex-direction: column;
    align-items: flex-start;
    height: 100%;
    padding-bottom: 1rem;
  }

  ul {
    padding: 0;
    width: 100%;
    flex-direction: column;
  }

  .nav-elem {
    width: 80%;
    display: none;
    align-items: center;
    justify-content: flex-start;
  }

  .nav-elem.active {
    border-bottom: 1px solid var(--neutral-100);
    display: flex;
  }

  li {
    height: 3rem;
    margin: 0;
  }

  ul:last-child button {
    margin-top: 1rem;
    height: 3rem;
  }

  .btn-elem {
    width: 80%;
    display: none;
  }

  .btn-elem.active {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>