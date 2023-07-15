<script setup lang="ts">

</script>

<template>
  <img src="@/assets/img/SpendWise_logo.svg" alt="Logo">
</template>

<style scoped>
img {
  margin-top: 0.5rem;
  cursor: pointer;
}

img:hover {
  opacity: 80%;
}

@media only screen and (max-width: 600px) {
  img {
    width: 7rem;
  }
}

@media only screen and (min-width: 600px) {
  img {
    width: 10rem;
  }
}
</style>