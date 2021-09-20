<script setup>
import { watchEffect, ref } from "vue";
const buttonClicked = ref(false)

watchEffect(() => {
  console.error("Hello from Watch", buttonClicked.value)
})

const clickButton = () => {
  buttonClicked.value = true
}
</script>

<template>
  <h3>Implementasi Watch Efffect</h3>
  <h4>Checklist</h4>
  <button @click="clickButton"> Click me!</button>
</template>
