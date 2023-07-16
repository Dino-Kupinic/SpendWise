<script setup lang="ts">
import Footer from "@/components/footer/Footer.vue";
import TitleText from "@/components/text/TitleText.vue";
import SubtitleText from "@/components/text/SubtitleText.vue";
</script>

<template>

  <div class="hero-section">
    <TitleText text="All Expenses. In one place."></TitleText>
    <div class="hero-subtitle-container">
      <SubtitleText
          text="SpendWise.™ offers a seamless and simple expense tracking experience,"></SubtitleText>
      <SubtitleText
          text="giving you an excellent overview of where your money is being spent."></SubtitleText>
    </div>
  </div>


  <Footer></Footer>
</template>

<style scoped>
.hero-section {
  margin: 0;
  padding: 8rem;
  height: 40vh;
  text-align: center;
}

.hero-subtitle-container {
  max-width: 100%;
  text-align: center;
}

p {
  color: var(--neutral-100);
}
</style>