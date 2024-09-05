<script setup>
import { onMounted, ref } from 'vue'
import { Plus, Search } from '@element-plus/icons-vue'
import { getNoticeList } from '@/api/notificationAnnouncement'

const form = ref({
  search: '',
})
const tableData = ref([])
const pageObj = ref({
  total: 0,
  pageSize: 10,
  pageNum: 1,
})
async function useNoticeList() {
  const params = {
    search: form.value.search,
    showCount: pageObj.value.pageSize,
    currentPage: pageObj.value.pageNum,
  }
  const res = await getNoticeList(params)
  tableData.value = res?.varList
  pageObj.value.total = res?.page.totalResult
}
useNoticeList()
function handleSizeChange(size) {
  pageObj.value.pageNum = size
  useNoticeList()
}
function handleCurrentChange(page) {
  pageObj.value.pageNum = page
  useNoticeList()
}
onMounted(() => { })
</script>

<template>
  <el-main id="defaultButtonManagement">
    <el-card style="width: 100%" class="mb-2">
      <el-input v-model="form.search" style="width: 240px" placeholder="请输入摘要内容" :prefix-icon="Search" class="mr-3" clearable />
      <el-button type="primary" :icon="Search" @click="useNoticeList">
        查询
      </el-button>
      <el-button type="primary" :icon="Plus">
        新增
      </el-button>
    </el-card>

    <el-card>
      <el-table :data="tableData" border style="width: 100%;" height="480">
        <el-table-column prop="CATEGORY" label="类型" min-width="180" show-overflow-tooltip />
        <el-table-column prop="TITLE" label="标题" min-width="180" show-overflow-tooltip />
        <el-table-column prop="CONTEXT" label="摘要内容" min-width="180" show-overflow-tooltip />
        <el-table-column prop="PUBLISHER" label="发布者" min-width="180" show-overflow-tooltip />
        <el-table-column prop="PUBLISH" label="发布情况" min-width="180" show-overflow-tooltip />
        <el-table-column prop="TYPEINDEX" label="首页是否显示" min-width="180" show-overflow-tooltip />
        <el-table-column prop="PUBLISH_DATE" label="创建时间" min-width="180" show-overflow-tooltip />
      </el-table>
      <el-pagination v-model:current-page="pageObj.pageNum" v-model:page-size="pageObj.pageSize" :page-sizes="[10, 20, 30, 50]" layout="total, sizes, prev, pager, next, jumper" :total="pageObj.total" class="mt-2" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
    </el-card>
  </el-main>
</template>

<style scoped>
#defaultButtonManagement {
  height: 100%;
}
</style>
