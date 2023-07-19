<script setup lang="ts">
import Footer from "@/components/footer/Footer.vue";
import SubtitleText from "@/components/text/SubtitleText.vue";
import HeroButton from "@/components/button/HeroButton.vue";
import HeroButtonHollow from "@/components/button/HeroButtonHollow.vue";
import HeroText from "@/components/text/HeroText.vue";
import FeatureBox from "@/components/feature-boxes/FeatureBox.vue";
</script>

<template>

  <div class="hero-section">
    <span class="hero-text">
      <HeroText text="All"></HeroText>
      <HeroText text="expenses." :gradient="true"></HeroText>
      <HeroText text="In one place."></HeroText>
    </span>
    <div class="hero-subtitle-container">
      <SubtitleText
          text="SpendWise.™ offers a seamless and simple expense tracking experience,"></SubtitleText>
      <SubtitleText
          text="giving you an excellent overview of where your money is being spent."></SubtitleText>
    </div>
    <div class="hero-buttons-container">
      <HeroButton icon="Arrow_forward" text="Start for free" to=""></HeroButton>
      <HeroButtonHollow icon="North_east" text="Explore Features" to=""></HeroButtonHollow>
    </div>
  </div>

  <div class="feature-section">
    <FeatureBox></FeatureBox>
    <FeatureBox></FeatureBox>
    <FeatureBox></FeatureBox>
  </div>

  <Footer></Footer>
</template>

<style scoped>
.hero-section {
  margin-bottom: 4rem;
  padding: 8rem;
  height: 45vh;
  text-align: center;
}

.hero-text {
  display: block;
}

.hero-subtitle-container {
  max-width: 100%;
  text-align: center;
}

.hero-buttons-container {
  margin-top: 3rem;
}

.feature-section {
  margin: auto;
  padding: 0;
  width: 70%;
  display: flex;
  justify-content: center;
  gap: 2rem;
}


@media (max-width: 768px) {
  .hero-section {
    padding: 2rem;
  }

  .feature-section {
    flex-direction: column;
    align-items: center;
  }
}
</style>