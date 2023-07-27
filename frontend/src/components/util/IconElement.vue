<script setup lang="ts">
import Icon from "@/components/util/Icon.vue"
import Link from "@/components/util/Link.vue"

defineProps<{
  icon: string,
  link: string,
}>()
</script>

<template>
  <div>
    <Link :link="link">
      <Icon :name="icon"></Icon>
    </Link>
  </div>
</template>

<style scoped>
div {
  margin-right: 1.5rem;
  margin-left: 1.5rem;
}

</style>

