<template>
  <el-container id="basicStatistics" class="p-3">
    <el-aside width="300px" class="p-3 bg-[#e6e6e6]">
      <div class="flex items-center border-b-2 border-[#fff] pb-2 mb-2">
        <span class="bg-[#203d8d] mr-2">&nbsp;</span>
        <div class="text-[20px]">
          基本统计
        </div>
      </div>
      <div class="fnc-btn mb-1">
        <el-button type="info" plain>
          新增
        </el-button>
        <el-button type="info" plain>
          下载
        </el-button>
      </div>
      <div class="fnc-tags">
        <el-tag v-for="(i, idx) in tags" :key="idx" type="info" class="mr-1 mb-2" effect="dark" @click="handleClick(i)">
          {{ i.name }}
        </el-tag>
      </div>
    </el-aside>
    <el-main>
      <!-- 如果没有图表数据则显示 Lottie 动画 -->
      <div v-if="!echartOpitons" ref="lottieContainer" class="w-full h-full" />
      <!-- 使用动态 :key 确保每次点击都会重新渲染图表 -->
      <apacheEcharts v-if="echartOpitons" :key="keys" :options="echartOpitons" style="height: 100%; width: 100%" />
    </el-main>
  </el-container>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
import lottie from 'lottie-web'
import { getEchartData, getList } from '@/api/basicStatistics/index.js'
import apacheEcharts from '@/components/apache-echart/index.vue'
import { getBarChartOptions, getLineChartOptions, getPieChartOptions, getRadarChartOptions } from '@/hooks/echart.js'

const tags = ref([])

const lottieContainer = ref(null)
let lottieInstance = null // 保存 Lottie 动画实例

async function useTags() {
  const res = await getList({})
  tags.value = res
}
useTags()

const echartOpitons = ref(null) // 初始值设为 null，表示没有图表数据
const keys = ref(0) // 用于强制重新渲染图表

function transformToEchartsOption(chartData) {
  const chartKey = Object.keys(chartData)[0]
  const chartInfo = chartData[chartKey].info
  const chartType = chartInfo.mode
  const data = chartData[chartKey].data
  switch (chartType) {
    case 'bar':
      return getBarChartOptions(chartInfo, data)
    case 'line':
      return getLineChartOptions(chartInfo, data)
    case 'pie':
      return getPieChartOptions(chartInfo, data)
    case 'radar':
      return getRadarChartOptions(chartInfo, data)
    default:
      console.warn('Unsupported chart type:', chartType)
      return {}
  }
};

async function handleClick(item) {
  const formData = new FormData()
  formData.append('id', item.id)
  const res = await getEchartData(formData)
  const o = transformToEchartsOption(res)

  // 先清空现有图表配置，再设置新的配置
  echartOpitons.value = null
  keys.value++ // 每次点击强制重新渲染图表
  echartOpitons.value = o
}

onMounted(() => {
  // 加载 Lottie 动画
  lottieInstance = lottie.loadAnimation({
    container: lottieContainer.value, // 容器 DOM 元素
    renderer: 'svg', // 渲染器类型，可以是 'svg', 'canvas' 或 'html'
    loop: true, // 是否循环播放
    autoplay: true, // 是否自动播放
    path: new URL('@/assets/lottie/empty-echart.json', import.meta.url).href, // 确保路径正确
  })
})

// 监听 echartOptions，图表加载时销毁 Lottie 动画
watch(echartOpitons, (newVal) => {
  if (newVal && lottieInstance)
    lottieInstance.destroy() // 销毁 Lottie 动画
})
</script>

<style scoped>
.el-button {
  margin-left: 0;
  margin-right: 5px;
  margin-bottom: 5px;
}

.el-main {
  padding: 0 10px !important;
}

#basicStatistics {
  height: 100%;
}
</style>
