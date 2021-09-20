<script setup>
import { inject } from "vue"

const myAddress = inject('address')
</script>

<template>
  <h3>Implementasi Provide & Inject</h3>
  <h4>My Address is {{ myAddress }}</h4>
</template>
