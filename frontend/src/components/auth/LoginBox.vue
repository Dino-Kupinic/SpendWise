<script setup lang="ts">
import {reactive} from "vue"
import type {User} from "@/model/user"
import {email, minLength, required} from "@vuelidate/validators"

const state: User = reactive({
  username: "",
  password: "",
  email: "",
})

const rules = {
  username: {required},
  password: {
    required,
    minLength: minLength(8),
  },
  email: {required, email},
}
</script>

<template>

</template>

<style scoped>

</style>