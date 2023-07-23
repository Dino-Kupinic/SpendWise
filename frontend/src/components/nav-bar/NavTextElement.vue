<script setup lang="ts">
import MenuNavigationText from "@/components/text/MenuNavigationText.vue";

defineProps<{
  link: string,
}>();
</script>

<template>
  <li>
    <RouterLink class="routerLink" :to="link">
      <MenuNavigationText>
        <slot></slot>
      </MenuNavigationText>
    </RouterLink>
  </li>
</template>

<style scoped>
li {
  margin-right: 1.5rem;
  margin-left: 1.5rem;
}

.routerLink {
  text-decoration: none;
}

</style>