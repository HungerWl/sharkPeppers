<template>
  <div ref="chartContainer" style="width: 100%; height: 100%;" />
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import * as echarts from 'echarts'

const props = defineProps({
  options: {
    type: Object,
    required: true,
  },
  autoResize: {
    type: Boolean,
    default: true,
  },
})

const chartContainer = ref(null)
let chartInstance = null

function initChart() {
  if (chartContainer.value) {
    chartInstance = echarts.init(chartContainer.value)
    chartInstance.setOption(props.options)
  }
}

function resizeChart() {
  if (chartInstance)
    chartInstance.resize()
}

// 监听 options 的变化以更新图表
watch(() => props.options, (newOptions) => {
  if (chartInstance)
    chartInstance.setOption(newOptions)
}, { deep: true })

onMounted(() => {
  initChart()
  if (props.autoResize)
    window.addEventListener('resize', resizeChart)
})

onBeforeUnmount(() => {
  if (props.autoResize)
    window.removeEventListener('resize', resizeChart)

  if (chartInstance)
    chartInstance.dispose()
})
</script>

<style scoped>
/* 你可以根据需要调整容器的样式 */
</style>
