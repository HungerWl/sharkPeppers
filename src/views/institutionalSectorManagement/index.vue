<template>
  <el-main id="defaultButtonManagement">
    <el-card style="width: 100%" class="mb-2">
      <el-input
        v-model="form.search" style="width: 240px" placeholder="请输入机构名称" :prefix-icon="Search" class="mr-3"
        clearable
      />
      <el-button type="primary" :icon="Search" @click="useTable">
        查询
      </el-button>
      <el-button type="primary" :icon="Plus">
        新增
      </el-button>
      <el-button type="primary" :icon="Download">
        导入模板下载
      </el-button>
      <el-button type="primary" :icon="Upload">
        导入
      </el-button>
    </el-card>

    <el-card>
      <el-table :data="tableData" border style="width: 100%;" height="480" row-key="id" :tree-props="treeProps">
        <el-table-column prop="name" label="机构名称" min-width="180" show-overflow-tooltip />
        <el-table-column prop="forShort" label="机构简称" min-width="180" show-overflow-tooltip />
        <el-table-column prop="phone" label="联系电话" min-width="180" show-overflow-tooltip />
        <el-table-column prop="orgCode" label="机构代码" min-width="180" show-overflow-tooltip />
        <el-table-column prop="status" label="机构状态" min-width="180" show-overflow-tooltip />
        <el-table-column prop="email" label="邮箱" min-width="180" show-overflow-tooltip />
        <!-- <el-table-column prop="responsiblePerson" label="负责人" min-width="180" show-overflow-tooltip /> -->
        <el-table-column prop="sortOrder" label="排序" min-width="180" show-overflow-tooltip />
      </el-table>
    </el-card>
  </el-main>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { Download, Plus, Search, Upload } from '@element-plus/icons-vue'
import { getListTree } from '@/api/institutionalSectorManagement'

const form = ref({
  name: '',
})
const tableData = ref([])
function normalizeData(data) {
  return data.map((item) => {
    // 确保 child 字段存在且为数组
    if (!item.child || !Array.isArray(item.child))
      item.child = []

    // 确保 hasChild 字段与 child 内容一致
    item.hasChild = item.child.length > 0

    // 递归处理子节点
    if (item.child.length > 0)
      item.child = normalizeData(item.child)

    return item
  })
}
async function useTable() {
  const params = {}
  const res = await getListTree(params)
  tableData.value = normalizeData(res)
}

const treeProps = ref({
  children: 'child',
})

onMounted(() => {
  useTable()
})
</script>

<style scoped>
#defaultButtonManagement {
  height: 100%;
}
</style>
