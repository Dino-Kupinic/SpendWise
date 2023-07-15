<script setup lang="ts">
import github from "@/assets/img/github.svg";
import {ref} from "vue";

const props = defineProps({
  name: {
    type: String,
    required: true
  }
});

const imgSrc = ref("");

switch (props.name) {
  case "github":
    imgSrc.value = github;
}
</script>

<template>
  <div>
    <img :src="imgSrc" alt="Icon">
  </div>
</template>

<style scoped>
img {
  margin-left: 1.5rem;
  width: 1.5rem;
  height: 1.5rem;
  padding: 0;
}

img:hover {
  opacity: 80%;
}

</style>