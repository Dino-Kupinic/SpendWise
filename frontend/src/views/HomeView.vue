<script setup lang="ts">
import SubtitleText from "@/components/text/HeroSubtitleText.vue"
import HeroButton from "@/components/button/HeroButton.vue"
import HeroText from "@/components/text/HeroText.vue"
import FeatureBox from "@/components/feature-boxes/FeatureBox.vue"
import GoogleIcon from "@/components/util/GoogleIcon.vue"
import BodySubtitleText from "@/components/text/BodySubtitleText.vue"
import BodyText from "@/components/text/BodyText.vue"
import HeroSubtitleText from "@/components/text/HeroSubtitleText.vue"
import StatsBox from "@/components/feature-boxes/StatsBox.vue"

</script>

<template>
  <div class="hero-section">
    <span class="hero-text">
      <HeroText text="All"></HeroText>
      <HeroText text="expenses." :gradient="true"></HeroText>
      <HeroText text="In one place."></HeroText>
    </span>
    <div class="hero-subtitle-container">
      <SubtitleText>
        SpendWise.™ offers a seamless and simple expense tracking experience,
      </SubtitleText>
      <SubtitleText>
        giving you an excellent overview of where your money is being spent.
      </SubtitleText>
    </div>
    <div class="hero-buttons-container">
      <HeroButton to="">
        <GoogleIcon name="Arrow_forward" font-size="1.4rem"></GoogleIcon>
        Start for free
      </HeroButton>
      <HeroButton to="" :hollow="true">
        <GoogleIcon name="North_east" font-size="1.4rem"></GoogleIcon>
        Choose a Plan
      </HeroButton>
    </div>
  </div>

  <div class="trusted-section">
    <HeroSubtitleText font-spacing="0.2em" font-size="0.9rem">
      LOVED BY MILLIONS OF USERS
    </HeroSubtitleText>
    <div class="stats-boxes">
      <StatsBox>
        <template #main>1,000,000+</template>
        Monthly users
      </StatsBox>
      <StatsBox>
        <template #main>500+</template>
        Expenses tracked every minute
      </StatsBox>
      <StatsBox>
        <template #main>99.9%</template>
        Reliability and Uptime
      </StatsBox>
      <StatsBox>
        <template #main>10+</template>
        New features added every month
      </StatsBox>
    </div>
  </div>

  <div class="feature-section">
    <FeatureBox>
      <BodySubtitleText>Expense Entry</BodySubtitleText>
      <BodyText>
        <p>Effortlessly record your expenses with a user-friendly interface.</p>
        <p>Keep track of dates, amounts, categories, vendors, and notes with ease.</p>
      </BodyText>
    </FeatureBox>
    <FeatureBox>
      <BodySubtitleText>Budgeting</BodySubtitleText>
      <BodyText>
        Set up and manage budgets for different expense categories, and receive timely notifications to stay on track.
      </BodyText>
    </FeatureBox>
    <FeatureBox>
      <BodySubtitleText>User-Friendly Interface</BodySubtitleText>
      <BodyText>
        Experience simplicity and ease! Our intuitive interface empowers you to navigate effortlessly,
        making expense tracking a delightful and productive experience.
      </BodyText>
    </FeatureBox>
  </div>

</template>

<style scoped>
.trusted-section {
  text-align: center;
  margin-bottom: 8rem;
}

.stats-boxes {
  display: flex;
  justify-content: center;
  gap: 4rem;
}

.hero-section {
  margin-bottom: 1rem;
  padding: 8rem;
  height: 28vh;
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
    margin-bottom: 8rem;
  }

  .feature-section {
    flex-direction: column;
    align-items: center;
  }
}
</style>