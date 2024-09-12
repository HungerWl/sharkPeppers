<!-- 附件预览 -->
<template>
  <el-container id="attache-content" class="p-3">
    <el-aside width="500px" class="content-left p-2 mr-2">
      <div class="tabs">
        <div
          v-for="(i, idx) in tabs" :key="idx"
          class="flex items-center cursor-pointer hover:fill-blue-700 hover:text-blue-700"
        >
          <SvgIcon :name="i.icon" class="w-6 h-6 mr-1" />
          <span class="text-[1.125rem] mr-1">{{ i.label }}</span>
          <span>{{ i.count }}</span>
        </div>
      </div>
      <div class="content-btn p-2">
        <el-button :icon="Plus" type="primary">
          上传文件
        </el-button>
      </div>
      <el-scrollbar class="content-list" height="100%" @scroll="handleScroll">
        <div v-for="item in itemList" :key="item.id" class="content-item flex item-center mb-2">
          <div class="left flex-[1]">
            <!-- Base64 图片 -->
            <img :src="item.base64Src" alt="Item Image" class="w-full h-auto object-cover rounded-lg">
          </div>
          <div class="right flex-[1]">
            <!-- 右侧内容 -->
          </div>
        </div>
      </el-scrollbar>
    </el-aside>
    <el-container class="content-right">
      <el-main>
        <div ref="lottieContainer" class="w-full h-full" />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import lottie from 'lottie-web'
import { Plus } from '@element-plus/icons-vue'
import SvgIcon from '@/components/svg-icon/index.vue'
import { getPreviews } from '@/api/attachePreview'

const tabs = ref([
  {
    label: '全文',
    icon: 'icon-quanwen',
    count: 0,
  },
  {
    label: '图片',
    icon: 'icon-image',
    count: 0,
  },
  {
    label: '视频',
    icon: 'icon-video',
    count: 0,
  },
  {
    label: '其它',
    icon: 'icon-qt',
    count: 0,
  },
])

// 获取缩略图
const itemList = ref([]) // 存储项目列表
async function useImage() {
  const formdata = new FormData()
  formdata.append('tableName', 'usc_cjxtdj')
  formdata.append('pageNo', 1)
  formdata.append('limit', 4)
  formdata.append('MTLX', 4)
  const res = await getPreviews(formdata)
  itemList.value = res.images
  const dataCount = res.typeCountByAJH
  tabs.value.forEach((item) => {
    if (Object.prototype.hasOwnProperty.call(dataCount, item.label))
      item.count = dataCount[item.label]
  })
}
// 处理滚动事件
async function handleScroll(e) { }

// 加载 Lottie 动画
const lottieContainer = ref(null)
onMounted(() => {
  // 加载 Lottie 动画
  lottie.loadAnimation({
    container: lottieContainer.value, // 容器 DOM 元素
    renderer: 'svg', // 渲染器类型，可以是 'svg', 'canvas' 或 'html'
    loop: true, // 是否循环播放
    autoplay: true, // 是否自动播放
    path: new URL('@/assets/lottie/loadingView.json', import.meta.url).href, // 确保路径正确
  })
  useImage()
})
</script>

<style scoped lang="scss">
#attache-content {
    height: 100vh;
}

.content-left {
    display: flex;
    flex-direction: column;
    background-color: #f5f7fa;
    color: #333;
    border-radius: 0.625rem;

    .tabs {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 0.625rem;
        padding: 0.625rem;
        border-bottom: 0.0625rem solid #ccc;
    }

    .content-btn {
        // border-bottom: .0625rem solid #ccc
    }

    .content-item {
        border: 3px solid #ccc;
        border-radius: 0.625rem;

        cursor: pointer;

        &:hover {
            border-color: #409eff;
        }
    }
}

.el-main {
    background-color: #f5f7fa;
    padding: 0;
    color: #333;
    border-radius: 0.625rem;
}
</style>
