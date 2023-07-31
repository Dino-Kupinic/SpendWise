<script setup lang="ts">
import BodyText from "@/components/text/BodyText.vue"
import Link from "@/components/util/Link.vue"
import GoogleIcon from "@/components/util/GoogleIcon.vue"
import IconElement from "@/components/util/IconElement.vue"
</script>

<template>
  <footer>
    <slot></slot>
    <div class="legal-info">
      <BodyText font-size="14px">
        Released under the
        <Link link="https://github.com/Dino-Kupinic/SpendWise/blob/master/LICENSE" :opens-tab="true">
          <span>
            MIT License.<GoogleIcon name="North_East" font-size="1.1rem" line-height="1.5"></GoogleIcon>
          </span>
        </Link>
        <br>
        Copyright © 2023 Dino Kupinic
      </BodyText>
      <IconElement link="https://github.com/Dino-Kupinic/SpendWise" icon="github"></IconElement>
    </div>
  </footer>
</template>

<style scoped>
footer {
  text-decoration: none;
  padding: 0;
  margin-top: 4rem;
  background-color: var(--neutral-1000);
  height: 20vh;
  width: 100%;
  position: relative;
  bottom: 0;
}

.legal-info {
  border-top: var(--neutral-900);
  padding: 1rem;
  display: inline;
  margin-top: 2rem;
  text-align: center;
}

</style>