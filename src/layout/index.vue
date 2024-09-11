<template>
  <Component :is="DefaultLayout" />
</template>

<script setup>
import DefaultLayout from './main/default-layout/index.vue'

defineOptions({ name: 'Layout' })
</script>
