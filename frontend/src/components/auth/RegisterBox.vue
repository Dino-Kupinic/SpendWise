<script setup lang="ts">
import {reactive} from "vue"
import type {User} from "@/model/user"
import {email, helpers, maxLength, minLength, required, sameAs} from "@vuelidate/validators"
import useVuelidate from "@vuelidate/core"
import InputField from "@/components/controls/InputField.vue"
import BodySubtitleText from "@/components/text/BodySubtitleText.vue"
import BodyText from "@/components/text/BodyText.vue"
import Link from "@/components/util/Link.vue"
import ActionButton from "@/components/button/ActionButton.vue"
import GoogleIcon from "@/components/util/GoogleIcon.vue"
import Spacer from "@/components/util/Spacer.vue"
import router from "@/router/router"
import InputError from "@/components/controls/InputError.vue"
import {EMAIL_MAX_LENGTH, MAX_LENGTH, PASSWORD_MIN_LENGTH} from "@/model/constants"

const state: User = reactive({
  username: "",
  password: "",
  email: "",
  terms: false,
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
  email: {
    required,
    email,
    maxLength: maxLength(EMAIL_MAX_LENGTH),
  },
  terms: {
    sameAs: helpers.withMessage("You need to accept the Terms & Conditions", sameAs(true)),
  },
}

const v$ = useVuelidate(rules, state)

async function submitForm() {
  const isFormCorrect = await v$.value.$validate()
  if (!isFormCorrect) return

  const user: User = {
    "username": state.username,
    "password": state.password,
    "email": state.email,
    "terms": state.terms,
  }

  try {
    await fetch("http://localhost:3000/users", {
      method: "POST",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
    await router.push("/auth/login")
  } catch (err) {
    console.error(err)
  }
}

</script>

<template>
  <BodySubtitleText class="title" font-size="1.8rem">Create your account</BodySubtitleText>
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
    <InputField :class="{'input-error': v$.email.$error}" v-model="state.email" label="E-Mail Address" type="email">
      <template #below-input>
        <InputError field="email" :v$="v$"></InputError>
      </template>
    </InputField>
    <div class="terms">
      <input v-model="state.terms" class="termsbox" type="checkbox">
      <label class="termstext" for="terms">
        I agree to the
        <Link link="/terms">
          <span>Terms & Conditions<GoogleIcon name="North_east" font-size="1.1rem"></GoogleIcon></span>
        </Link>
      </label><br>
    </div>
    <InputError class="term-error" field="terms" :v$="v$"></InputError>
    <div class="button-container">
      <ActionButton @click="submitForm" class="btn" width="88%" height="3rem">Create my account</ActionButton>
    </div>
  </div>
  <BodyText>
    Already have an account?
    <Link @click="router.push('/auth/login')">Login</Link>
  </BodyText>
  <Spacer height="8vh"></Spacer>
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

.term-error {
  margin: 0 0 0.5rem 1rem;
}

.input-error :deep(input) {
  border-color: var(--error-400);
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