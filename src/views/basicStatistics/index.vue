<script setup>
import { onMounted, ref } from 'vue'
import lottie from 'lottie-web'
import { getEchartData, getList } from '@/api/basicStatistics/index.js'
import apacheEchart from '@/components/apache-echart/index.vue'

const tags = ref([])

const lottieContainer = ref(null)

async function useTags() {
  const res = await getList({})
  tags.value = res
}
useTags()

const echartOpitons = ref({})
const autoResize = ref(true)

async function handleClick(item) {
  const formData = new FormData()
  formData.append('id', item.id)
  const res = await getEchartData(formData)
}

onMounted(() => {
  // 加载 Lottie 动画
  lottie.loadAnimation({
    container: lottieContainer.value, // 容器 DOM 元素
    renderer: 'svg', // 渲染器类型，可以是 'svg', 'canvas' 或 'html'
    loop: true, // 是否循环播放
    autoplay: true, // 是否自动播放
    path: new URL('@/assets/lottie/empty-echart.json', import.meta.url).href, // 确保路径正确
  })
})
</script>

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
      <div ref="lottieContainer" class="w-full h-full" />
    </el-main>
  </el-container>
</template>

<style scoped>
.el-button {
  margin-left: 0;
  margin-right: 5px;
  margin-bottom: 5px;
}

#basicStatistics {
  height: 100%;
}
</style>
