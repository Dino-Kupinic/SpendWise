<script setup lang="ts">
import Icon from "@/components/util/Icon.vue";
import Link from "@/components/util/Link.vue";

const {link, icon} = defineProps<{
  icon: string,
  link: string,
}>();
</script>

<template>
  <li>
    <Link :link="link">
      <Icon :name="icon"></Icon>
    </Link>
  </li>
</template>

<style scoped>
li {
  margin-right: 1.5rem;
  margin-left: 1.5rem;
}

</style>

