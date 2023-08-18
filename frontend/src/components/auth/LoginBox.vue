<script setup lang="ts">
import {reactive} from "vue"
import type {LoginReponse, LoginUser} from "@/model/user"
import {maxLength, minLength, required} from "@vuelidate/validators"
import useVuelidate from "@vuelidate/core"
import InputField from "@/components/controls/InputField.vue"
import BodySubtitleText from "@/components/text/BodySubtitleText.vue"
import BodyText from "@/components/text/BodyText.vue"
import Link from "@/components/util/Link.vue"
import ActionButton from "@/components/button/ActionButton.vue"
import Spacer from "@/components/util/Spacer.vue"
import router from "@/router/router"
import InputError from "@/components/controls/InputError.vue"
import {MAX_LENGTH, PASSWORD_MIN_LENGTH} from "@/model/constants"

const state: LoginUser = reactive({
  username: "",
  password: "",
})

const rules = {
  username: {
    required,
    maxLength: maxLength(MAX_LENGTH),
  },
  password: {
    required,
    minLength: minLength(PASSWORD_MIN_LENGTH),
    maxLength: maxLength(MAX_LENGTH),
  },
}

const v$ = useVuelidate(rules, state)

async function submitForm() {
  const isFormCorrect = await v$.value.$validate()
  if (!isFormCorrect) return

  const loginUser: LoginUser = {
    username: state.username,
    password: state.password,
  }

  try {
    const response = await fetch("http://localhost:3000/auth/login", {
      method: "POST",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginUser),
    })

    if (response.status !== 200)
      return

    const content: LoginReponse = await response.json()
    localStorage.setItem("auth_token", content.access_token)

    await router.push("/")
  } catch (err) {
    console.error(err)
  }
}
</script>

<template>
  <BodySubtitleText class="title" font-size="1.8rem">Welcome back.</BodySubtitleText>
  <div class="container">
    <InputField :class="{'input-error': v$.username.$error}" v-model="state.username" label="Username">
      <template #below-input>
        <InputError field="username" :v$="v$"></InputError>
      </template>
    </InputField>
    <InputField :class="{'input-error': v$.password.$error}" v-model="state.password" label="Password" type="password">
      <template #below-input>
        <InputError field="password" :v$="v$"></InputError>
      </template>
    </InputField>
    <Spacer height="1rem"></Spacer>
    <div class="button-container">
      <ActionButton @click="submitForm" class="btn" width="88%" height="3rem">Log in</ActionButton>
    </div>
  </div>
  <BodyText>
    New to SpendWise?
    <Link @click="router.push('/auth/register')">
      Register
    </Link>
  </BodyText>
  <Spacer height="28vh"></Spacer>
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


.input-error :deep(input) {
  border-color: var(--error-400);
}

@media screen and (max-width: 600px) {
  .container {
    width: 80%;
    min-width: 200px;
  }
}
</style>