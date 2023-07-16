<script setup lang="ts">
import Icon from "@/components/util/Icon.vue";

const props = defineProps<{
  icon: string,
  link: string,
}>();
</script>

<template>
  <li>
    <a :href="props.link" target="_blank" rel="noopener noreferrer" >
      <Icon :name="props.icon"></Icon>
    </a>
  </li>
</template>

<style scoped>
li {
  margin-right: 1.5rem;
  margin-left: 1.5rem;
}

</style>