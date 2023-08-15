<template>
  <div class="composite-api-component">
    <div>composite component count is {{ count }}</div>
    <div @click="add">add</div>
  </div>
</template>
<script setup>
import { ref } from 'vue';

const count = ref(0);

function add() {
  count.value++;
}
</script>
