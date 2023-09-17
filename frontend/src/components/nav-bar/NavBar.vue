<script setup lang="ts">
import NavTextElement from "@/components/nav-bar/NavTextElement.vue"
import Logo from "@/components/util/Logo.vue"
import VerticalSpacer from "@/components/nav-bar/VerticalSpacer.vue"
import ActionButton from "@/components/button/ActionButton.vue"
import ToggleButton from "@/components/nav-bar/ToggleButton.vue"
import {computed, ref} from "vue"
import GoogleIcon from "@/components/util/GoogleIcon.vue"
import Dropdown from "@/components/controls/Dropdown.vue"

const isActive = ref(false)

const menuItems = [
  {
    text: "Features",
    link: "/",
  },
  {
    text: "Docs",
    link: "/",
  },
  {
    text: "Pricing",
    link: "/",
  },
  {
    text: "About",
    link: "/",
  },
]

const token = ref<string>(localStorage.getItem("auth_token") || "")

const isLoggedIn = computed(() => {
  return token.value !== ""
})

function logout() {
  token.value = ""

  localStorage.setItem("auth_token", "")
}
</script>

<template>
  <nav>
    <ToggleButton @active-click="isActive = !isActive"></ToggleButton>
    <ul>
      <li class="logo-container">
        <Logo></Logo>
      </li>
      <NavTextElement
          v-for="item in menuItems"
          :key="item.text"
          :class="{'active': isActive, 'nav-elem': true}"
          :link="item.link"
      >
        {{ item.text }}
      </NavTextElement>
      <VerticalSpacer></VerticalSpacer>
      <template v-if="!isLoggedIn">
        <RouterLink to="/auth/login">
          <ActionButton
              :class="{'active': isActive, 'btn-elem': true}"
              width="6rem" :hollow="true" :glow="true"
          >
            <span class="login-text">Login</span>
          </ActionButton>
        </RouterLink>
        <RouterLink to="/auth/register">
          <ActionButton
              :class="{'active': isActive, 'btn-elem': true}"
              width="6rem" :glow="true"
          >
            <span class="register-text">Register</span>
          </ActionButton>
        </RouterLink>
      </template>
      <template v-else>
        <Dropdown width="12rem">
          <template #name :class="{'active': isActive, 'nav-elem': true}">
            <NavTextElement link="/">
              <GoogleIcon name="Account_Circle" font-size="1.27rem"></GoogleIcon>
              Account
              <GoogleIcon name="Expand_More" font-size="1.3rem"></GoogleIcon>
            </NavTextElement>
          </template>
          <template #content>
            <NavTextElement class="drop-elem" link="/profile">
              Profile
            </NavTextElement>
            <ActionButton
                :class="{'active': isActive, 'btn-elem': true}"
                width="11rem" :hollow="true" @click="logout"
            >
              <GoogleIcon name="logout" font-size="1.2rem" padding="0 5px 0 0"></GoogleIcon>
              <span class="logout-text">Logout</span>
            </ActionButton>
          </template>
        </Dropdown>
      </template>
    </ul>
  </nav>
</template>

<style scoped>
.login-text {
  color: var(--neutral-200);
}

.register-text {
  color: var(--neutral-900);
}

nav {
  background: rgba(8, 8, 8, 0.7);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  position: sticky;
  z-index: 100;
  border-bottom: 1px solid var(--neutral-700);
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