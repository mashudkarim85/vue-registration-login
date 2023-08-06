<script setup>
import {  RouterView } from 'vue-router'

const backgroundImageStyle = `background-image: url(https://images.unsplash.com/photo-1690555575753-7aa27df96b52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=780&q=80); background-position: center`;

</script>

<template>
  <div class="min-h-screen flex items-center justify-center">
    <div class="w-full bg-gray-50 dark:bg-gray-900 bg-cover bg-no-repeat" :style="backgroundImageStyle">
      <RouterView/>
    </div>
  </div>
 
</template>

<style scoped>
</style>
