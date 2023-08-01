<script setup lang="ts">
import {reactive, ref} from "vue"
import type {LoginUser} from "@/model/user"
import {email, maxLength, minLength, required} from "@vuelidate/validators"
import useVuelidate from "@vuelidate/core"
import InputField from "@/components/controls/InputField.vue"
import BodySubtitleText from "@/components/text/BodySubtitleText.vue"
import BodyText from "@/components/text/BodyText.vue"
import Link from "@/components/util/Link.vue"
import ActionButton from "@/components/button/ActionButton.vue"
import GoogleIcon from "@/components/util/GoogleIcon.vue"
import Spacer from "@/components/util/Spacer.vue"
import router from "@/router/router"

const usernameRef = ref("")
const passwordRef = ref("")

const state: LoginUser = reactive({
  username: "",
  password: "",
})

const rules = {
  username: {
    required,
    maxLength: maxLength(50),
  },
  password: {
    required,
    minLength: minLength(8),
    maxLength: maxLength(50),
  },
}

const $v = useVuelidate(rules, state)
</script>

<template>
  <BodySubtitleText class="title" font-size="1.8rem">Welcome back.</BodySubtitleText>
  <div class="container">
    <InputField v-model="usernameRef" label="Username"></InputField>
    <InputField v-model="passwordRef" label="Password" type="password"></InputField>
    <Spacer height="1rem"></Spacer>
    <div class="button-container">
      <ActionButton class="btn" width="88%" height="3rem">Log in</ActionButton>
    </div>
  </div>
  <BodyText>
    New to SpendWise?
    <Link @click="router.push('/auth/register')">
      Register
    </Link>
  </BodyText>
  <Spacer height="31vh"></Spacer>
</template>

<style scoped>
.container {
  -webkit-backdrop-filter: blur(15px);
  backdrop-filter: blur(15px);
  border: 1px solid var(--neutral-700);
  border-radius: 1rem;
  padding: 1.2rem;
  width: 25%;
  min-width: 360px;
  margin: auto;
}

.button-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

:deep(.btn) {
  border-radius: 0.5rem;
}

.title {
  display: block;
  text-align: center;
}

.terms {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.5rem 0 0.5rem 0;
}

.termstext {
  margin-left: 0.7rem;
  color: var(--neutral-200);
}

.termsbox {
  width: 1.3rem;
  height: 1.3rem;
}

@media screen and (max-width: 600px) {
  .container {
    width: 80%;
    min-width: 200px;
  }
}
</style>