<template>
  <el-main>
    <!-- 顶部卡片 -->
    <el-card shadow="hover" body-class="card-body">
      <div class="flex items-center">
        <el-avatar :size="50" :src="state.circleUrl" />
        <div class="flex flex-col text-[1rem] ml-4">
          <strong class="mb-1">你好,{{ userStore.userInfo?.BZ }} 开始您一天的工作吧！</strong>
          <span>{{ state.formattedTime }}</span>
        </div>
      </div>
      <div>
        <span v-for="i in todoList" :key="i.title">
          <el-tag class="mr-2" :type="i.type" effect="dark">{{ i.title }}:{{ i.count }}</el-tag>
        </span>
      </div>
    </el-card>
    <!-- main -->
    <el-row :gutter="20">
      <!-- 主区域 -->
      <el-col :span="16">
        <el-card>
          <template #header>
            <strong class="tracking-widest">通知公告</strong>
          </template>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div
              v-for="item in noticeList" :key="item.ID"
              class="flex flex-col p-4 rounded-lg border shadow-sm overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg hover:border-blue-300"
            >
              <span class="truncate text-lg font-semibold mb-2" :title="item.CONTEXT">{{ item.CONTEXT }}</span>
              <div class="flex flex-col text-sm">
                <span class="truncate">{{ item.PUBLISHER }}</span>
                <span>{{ item.PUBLISH_DATE }}</span>
              </div>
            </div>
          </div>
        </el-card>
        <el-card class="border border-gray-300 rounded-lg shadow-lg">
          <template #header>
            <strong class="tracking-widest text-lg font-semibold">文件共享中心</strong>
          </template>
          <div class="divide-y divide-gray-200">
            <div
              v-for="item in fileList" :key="item.ID"
              class="flex justify-between items-center p-4 hover:bg-gray-100 transition duration-200 ease-in-out"
            >
              <span class="text-blue-600 font-medium">{{ item.NAME }}</span>
              <span class="text-gray-500 text-sm">{{ item.CREATED_TIME }}</span>
            </div>
          </div>
        </el-card>
      </el-col>
      <!-- 右侧导航栏 -->
      <el-col :span="8">
        <el-card>
          <template #header>
            <strong>快捷导航</strong>
          </template>
          <div class="flex items-center flex-wrap">
            <div v-for="route in quickNavigation" :key="route.path" class="mr-3 mb-2">
              <el-tag color="#626aef" size="large" @click="navigateTo(route)">
                <span class="text-[#fff]"> {{ route.title }}</span>
              </el-tag>
            </div>
          </div>
        </el-card>
        <el-card>
          <template #header>
            <strong>统计中心</strong>
          </template>
          <apacheEcharts :options="echartOpitons" style="height:500px; width: 100%" />
        </el-card>
      </el-col>
    </el-row>
  </el-main>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue'
import dayjs from 'dayjs'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/modules/user'
import { getNotice, getShartFile, getStatisticalCenter } from '@/api/home/home.js'
import apacheEcharts from '@/components/apache-echart/index.vue'
import { getRadarChartOptions } from '@/hooks/echart.js'

const router = useRouter()

const userStore = useUserStore()

// 待办事项
const todoList = ref([
  { title: '借阅待办', count: 0, type: 'primary' },
  { title: '归档待办', count: 0, type: 'success' },
  { title: '鉴定待办', count: 0, type: 'warning' },
])

// 通知公告
const noticeList = ref([])
// 共享文件
const fileList = ref([])
// 统计中心options
const echartOpitons = ref({})

function init() {
  const p1 = async () => {
    const res = await getNotice()
    noticeList.value = res.varList.slice(0, 12)
  }
  const p2 = async () => {
    const res = await getShartFile()
    fileList.value = res.varList.slice(0, 6)
  }
  const p3 = async () => {
    const format = new FormData()
    format.append('id', '3e0ae2aa-f400-4b2a-bfe2-ac07fe139d15')
    const res = await getStatisticalCenter(format)
    const o = getRadarChartOptions(res.res1.info, res.res1.data)
    echartOpitons.value = o
  }
  return {
    p1,
    p2,
    p3,
  }
}

const state = reactive({
  circleUrl:
    'https://unpkg.com/@vbenjs/static-source@0.1.5/source/avatar-v1.webp',
  formattedTime: '',
})

const quickNavigation = ref([
  { title: '收集库', path: '/archive' },
  { title: '整理库', path: '/archive' },
  { title: '服务利用', path: '/archive' },
  { title: '库房管理', path: '/archive' },
  { title: '库房管理', path: '/archive' },
  { title: '库房管理', path: '/archive' },
  { title: '库房管理', path: '/archive' },
  { title: '库房管理', path: '/archive' },
  { title: '库房管理', path: '/archive' },
])

function navigateTo(value) {
  router.push(value.path)
}

onMounted(() => {
  const initEvent = init()
  initEvent.p1()
  initEvent.p2()
  initEvent.p3()
  state.formattedTime = dayjs().format('YYYY-MM-DD HH:mm:ss')
  setInterval(() => {
    state.formattedTime = dayjs().format('YYYY-MM-DD HH:mm:ss')
  }, 1000)
})
</script>

<style scoped lang="scss">
:deep(.card-body) {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}

.el-card {
  margin-bottom: 10px !important;
}
</style>
