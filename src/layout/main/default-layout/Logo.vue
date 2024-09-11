<template>
  <div class="flex items-center pl-5 pr-5 h-full wl-logo">
    <img src="/logo.svg" class="h-[50%] mr-3">
    <h1 class="text-xl font-black">
      {{ title }}
    </h1>
  </div>
</template>

<script setup>
const title = import.meta.env.VITE_APP_TITLE
</script>

<style scoped>
.wl-logo {
  color: var(--wl-logo-title-color);
  font-family: "AliHei";
}
</style>
