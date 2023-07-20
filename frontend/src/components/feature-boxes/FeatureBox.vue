<script setup lang="ts">
import {computed} from "vue";
import SubtitleText from "@/components/text/SubtitleText.vue";
import BodyText from "@/components/text/BodyText.vue";
import BodySubtitleText from "@/components/text/BodySubtitleText.vue";
import GoogleIcon from "@/components/util/GoogleIcon.vue";

interface Props {
  title: string,
  content: string,
  width?: string,
  height?: string
}

const props = withDefaults(defineProps<Props>(), {
  title: "",
  content: "",
  width: "30%",
  height: "16rem",
});

const boxWidth = computed(() => {
  return props.width;
});
const boxHeight = computed(() => {
  return props.height;
});
</script>

<template>
  <div>
    <span>
      <BodySubtitleText :text="props.title"></BodySubtitleText>
    </span>
    <BodyText :text="props.content"></BodyText>
  </div>
</template>

<style scoped>
div {
  border: 1px solid var(--neutral-100-minor);
  border-radius: 1rem;
  background: rgb(10, 34, 44);
  background: radial-gradient(circle, rgba(10, 34, 44, 1) 3%, rgba(0, 27, 38, 1) 43%, rgba(3, 3, 3, 1) 100%);
  width: v-bind(boxWidth);
  height: v-bind(boxHeight);
  padding: 2rem;
}

@media (max-width: 768px) {
  div {
    width: 100%;
    height: 10rem;
  }
}

@media (max-width: 1200px) {
  div {
    height: 30rem;
  }
}
</style>