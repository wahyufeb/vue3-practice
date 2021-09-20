<script setup>
import { defineProps } from "vue";

defineProps({
  data: {
    type: Array,
    required: false
  }
})
</script>

<template>
  <h3>Implementasi Props pada Vue3</h3>
  <ul>
    <li v-for="(item, index) in data" :key="index+1">{{ item.nama }}, tinggal di <span class="profile-item">{{ item.live }}</span></li>
  </ul>
</template>

<style scoped>
.profile-item {
  background-color: red;
  padding:1px;
  color: #fff;
}
</style>