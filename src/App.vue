<script setup>
import Card from "./components/Card.vue";
import { ref, provide } from "vue";
import Address from "./components/Address.vue";
import CheckList from "./components/CheckList.vue";
import Modal from "./components/Modal.vue";
import Notification from "./components/Notification.vue";
import WrapperModal from "./components/WrapperModal.vue";

const profiles = ref([
  { nama: "June Wanwimol Jaenasavamethee", live: "Phuket" },
  { nama: "Puimek Napasorn", live: "Kanchanaburi" },
  { nama: "Prim Chanikarn", live: "Bangkok" },
]);

const list = profiles.value.map((item) => {
  item.value = false;
  return item;
});

provide("address", "Mandiraja Kulon, Mandiraja, Banjarnegara");
</script>

<template>
  <header>
    <img alt="Vue logo" src="./assets/logo.png" />
  </header>
  <!-- Implementasi Props -->
  <Card :data="profiles"/>
  <hr>
  <!-- #End Implementasi Props -->

  <!-- Implementasi Provide & Inject -->
  <Address/>
  <hr>
  <!-- #End Impementasi Provide & Inject -->

  <!-- Implementasi Watch Efffect -->
  <CheckList />
  <hr>
  <!-- #End Implementasi Watch Effect -->

  <!-- Implementasi Custom Directive -->
  <Notification/>
  <hr>
  <!-- #End Implementasi Custom Directiv -->

  <!-- Implementasi Vue Teleport -->
  <WrapperModal/>
  <hr>
  <!-- #End Vue Teleport -->
</template>

<style>
* {
  font-family: Arial, Helvetica, sans-serif;
}
header {
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
}
</style>
