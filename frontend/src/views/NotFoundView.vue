<script setup lang="ts">

import HeroText from "@/components/text/HeroText.vue"
import SubtitleText from "@/components/text/HeroSubtitleText.vue"
import BodyText from "@/components/text/BodyText.vue"
import HeroButton from "@/components/button/HeroButton.vue"
import GoogleIcon from "@/components/util/GoogleIcon.vue"
import Spacer from "@/components/util/Spacer.vue"
</script>

<template>
  <Spacer height="3rem"></Spacer>
  <div>
    <HeroText text="404" :gradient="true" :disable-margins="true"></HeroText>
    <SubtitleText text="Oops. Something went wrong!"></SubtitleText>
    <BodyText>
      But if you don't change your direction, and if you keep looking, you may end up where you are heading.
    </BodyText>
    <HeroButton class="heroButton" to="/" :hollow="true">
      <GoogleIcon name="North_East" font-size="1.4rem"></GoogleIcon>
      Take me home
    </HeroButton>
  </div>
  <Spacer height="10rem"></Spacer>
</template>

<style scoped>
div {
  width: 30%;
  text-align: center;
  margin: auto;
}

.heroButton {
  margin: 0;
}

@media only screen and (max-width: 600px) {
  div {
    width: 80%;
  }
}
</style>