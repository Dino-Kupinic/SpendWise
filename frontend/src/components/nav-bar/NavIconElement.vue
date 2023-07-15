<script setup lang="ts">
import Icon from "@/components/util/Icon.vue";

defineProps({
  icon: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <li>
    <a :href=link>
      <Icon :name="icon"></Icon>
    </a>
  </li>
</template>

<style scoped>
li {
  margin-right: 1.5rem;
  margin-left: 1.5rem;
}

</style>