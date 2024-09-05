<script setup>
import { onMounted, ref } from 'vue'
import { DocumentAdd, Plus, Search } from '@element-plus/icons-vue'
import { getListTree } from '@/api/defaultButtons'

const form = ref({
  search: '',
  type: '0',
})
const tableData = ref([])
const pageObj = ref({
  total: 0,
  pageSize: 10,
  pageNum: 1,
})
async function useListTree() {
  const formData = new FormData()
  formData.append('search', form.value.search)
  formData.append('type', form.value.type)
  formData.append('showCount', pageObj.value.pageSize)
  formData.append('currentPage', pageObj.value.pageNum)

  const res = await getListTree(formData)
  tableData.value = res?.varList || []
  pageObj.value.total = res?.page?.totalResult || 0
}
useListTree()
function handleSizeChange(size) {
  pageObj.value.pageNum = size
  useListTree()
}
function handleCurrentChange(page) {
  pageObj.value.pageNum = page
  useListTree()
}
const activeName = ref('0')
function handleClick() {
  pageObj.value.pageNum = 1
  form.value.type = activeName.value
  useListTree()
}
onMounted(() => { })
</script>

<template>
  <el-main id="defaultButtonManagement">
    <el-card style="width: 100%" class="mb-2">
      <el-input
        v-model="form.search" style="width: 240px" placeholder="请输入按钮名称" :prefix-icon="Search" class="mr-3"
        clearable
      />
      <el-button type="primary" :icon="Search" @click="useListTree">
        查询
      </el-button>
      <el-button type="primary" :icon="Plus">
        新增
      </el-button>
      <el-button type="primary" :icon="DocumentAdd">
        默认按钮配置
      </el-button>
    </el-card>

    <el-card>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="收集库" name="0" />
        <el-tab-pane label="整理库" name="1" />
        <el-tab-pane label="永久库" name="2" />
      </el-tabs>
      <el-table :data="tableData" border style="width: 100%;" height="480">
        <el-table-column prop="NAME" label="按钮名称" min-width="180" />
        <el-table-column prop="TYPE" label="按钮分类" min-width="180" />
        <el-table-column prop="IDENTIFY" label="按钮标识" min-width="180" />
        <el-table-column prop="BZ" label="按钮描述" min-width="180" />
        <el-table-column prop="SHIRO_KEY" label="权限标识" min-width="180" />
        <el-table-column prop="ORDER_NUM" label="排序号" min-width="180" />
      </el-table>
      <el-pagination
        v-model:current-page="pageObj.pageNum" v-model:page-size="pageObj.pageSize"
        :page-sizes="[10, 20, 30, 50]" layout="total, sizes, prev, pager, next, jumper" :total="pageObj.total"
        class="mt-2" @size-change="handleSizeChange" @current-change="handleCurrentChange"
      />
    </el-card>
  </el-main>
</template>

<style scoped>
#defaultButtonManagement {
  height: 100%;
}
</style>
