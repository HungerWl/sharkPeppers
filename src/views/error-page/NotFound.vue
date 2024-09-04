<script setup>
import { onMounted, ref } from 'vue'
import lottie from 'lottie-web'

const lottieContainer = ref(null)

onMounted(() => {
  // 加载 Lottie 动画
  lottie.loadAnimation({
    container: lottieContainer.value, // 容器 DOM 元素
    renderer: 'svg', // 渲染器类型，可以是 'svg', 'canvas' 或 'html'
    loop: true, // 是否循环播放
    autoplay: true, // 是否自动播放
    path: new URL('@/assets/lottie/404.json', import.meta.url).href, // 确保路径正确
  })
})
</script>

<template>
  <el-main class="fv-error-404">
    <div ref="lottieContainer" class="w-full h-full" />
  </el-main>
</template>

<style scoped>
.fv-error-404 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100%;
}
</style>
