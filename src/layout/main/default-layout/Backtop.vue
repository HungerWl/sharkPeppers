<template>
  <el-backtop
    :right="right"
    :bottom="bottom"
    :visibility-height="visibilityHeight"
    :target="target"
  />
</template>

<script setup>
defineProps({
  target: { type: String, default: 'body' },
  visibilityHeight: { type: Number, default: 100 },
  right: { type: Number, default: 40 },
  bottom: { type: Number, default: 40 },
})
</script>
