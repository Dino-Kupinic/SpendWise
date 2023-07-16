<script setup lang="ts">
import Footer from "@/components/footer/Footer.vue";
import TitleText from "@/components/text/TitleText.vue";
import SubtitleText from "@/components/text/SubtitleText.vue";
import HeroButton from "@/components/button/HeroButton.vue";
import HeroButtonHollow from "@/components/button/HeroButtonHollow.vue";
</script>

<template>

  <div class="hero-section">
    <span>
      <TitleText text="All"></TitleText>
      <TitleText text="expenses." :gradient="true"></TitleText>
      <TitleText text="In one place."></TitleText>
    </span>
    <div class="hero-subtitle-container">
      <SubtitleText
          text="SpendWise.™ offers a seamless and simple expense tracking experience,"></SubtitleText>
      <SubtitleText
          text="giving you an excellent overview of where your money is being spent."></SubtitleText>
    </div>
    <div class="hero-buttons-container">
      <HeroButton icon="Arrow_forward" text="Start for free" to="" ></HeroButton>
      <HeroButtonHollow icon="North_east" text="Explore Features" to=""></HeroButtonHollow>
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

.hero-buttons-container {
  margin-top: 3rem;
}

p {
  color: var(--neutral-100);
}
</style>