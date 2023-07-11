<script setup lang="ts">


import Icon from "@/components/util/Icon.vue";

defineProps({
  title: String,
  link: {
    type: String,
    required: true
  },
  icon: String,
});
</script>

<template>
  <li>
    <RouterLink class="routerLink" :to=link>
      <button><Icon :name=icon></Icon> {{ title }}</button>
    </RouterLink>
  </li>
</template>

<style scoped>

</style>