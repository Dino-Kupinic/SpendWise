<script setup lang="ts">
import {useVModel} from "@vueuse/core"

interface Props {
  modelValue: string
  type?: string,
  label?: string,
}

const props = withDefaults(defineProps<Props>(), {
  type: "text",
  label: "Label",
})

const emit = defineEmits<{
  update: [modelValue: string]
}>()
const input = useVModel(props, "modelValue", emit)
</script>

<template>
  <div class="form-group">
    <label for="input">{{ label }}</label>
    <slot name="above-input"></slot>
    <input v-model="input" name="input" :type="type">
    <slot name="below-input"></slot>
  </div>
</template>

<style scoped>
.form-group {
  display: flex;
  flex-direction: column;
}

input {
  font-size: 1rem;
  padding: 1rem;
  margin: 0.5rem;
  background-color: rgba(0, 0, 0, 0.1);
  color: var(--neutral-100);
  border: 1px solid var(--neutral-700);
  border-radius: 0.5rem;
}

input:focus {
  border: 1px solid var(--brand-500);
  outline: none;
}

label {
  padding: 0.5rem;
}
</style>