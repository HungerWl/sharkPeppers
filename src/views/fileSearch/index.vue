<template>
  <el-main id="fileSearch">
    <el-card style="width: 100%" class="mb-2">
      <el-input v-model="form.param" style="max-width: 600px" placeholder="请输入查询内容" class="mr-2">
        <template #prepend>
          <el-select v-model="select" placeholder="查询方式" style="width: 115px">
            <el-option label="全文" value="0" />
            <el-option label="库查询" value="1" />
          </el-select>
        </template>
        <template #append>
          <el-button :icon="Search" />
        </template>
      </el-input>
      <el-button type="primary" :icon="Picture">
        智能识图
      </el-button>
      <el-button type="primary" :icon="Setting" @click="dialogVisible = true">
        显示设置
      </el-button>
    </el-card>
    <el-table :data="tableData" border style="width: 100%;" height="480">
      <el-table-column type="index" label="序号" min-width="80" show-overflow-tooltip />
      <el-table-column type="index" label="档号" min-width="120" show-overflow-tooltip />
      <el-table-column type="index" label="题名" min-width="120" show-overflow-tooltip />
      <el-table-column
        v-for="(i, idx) in checkList" :key="idx" :prop="i.field" :label="i.field_name" min-width="120"
        show-overflow-tooltip
      />
      <el-table-column fixed="right" label="操作" min-width="120">
        <template #default>
          <el-button link type="primary">
            卷内
          </el-button>
          <el-button link type="primary">
            附件
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog v-model="dialogVisible" title="显示设置" width="500">
      <el-checkbox v-model="checkAll" :indeterminate="isIndeterminate" @change="handleCheckAllChange">
        全选
      </el-checkbox>
      <el-checkbox-group v-model="checkList" @change="handleCheckedCitiesChange">
        <el-checkbox v-for="(i, idx) in checkOpiton" :key="idx" :label="i.field_name" :value="i" />
      </el-checkbox-group>
    </el-dialog>
  </el-main>
</template>

<script setup>
import { ref } from 'vue'
import { Picture, Search, Setting } from '@element-plus/icons-vue'
import { getListAll } from '@/api/fileSearch'

const tableData = ref([])
const form = ref({
  param: '',
})
const select = ref()
const checkList = ref([])
const checkOpiton = ref([])
const isIndeterminate = ref(false)
const checkAll = ref(false)

async function useListAll() {
  const res = await getListAll()
  checkOpiton.value = res
}
useListAll()
const dialogVisible = ref(false)
function handleCheckAllChange(val) {
  checkList.value = val ? checkOpiton.value.map(item => item) : []
  isIndeterminate.value = false
}
function handleCheckedCitiesChange(value) {
  const checkedCount = value.length
  if (checkedCount > 0)
    isIndeterminate.value = true

  if (checkedCount === checkOpiton.value.length) {
    checkAll.value = true
    isIndeterminate.value = false
  }
}
</script>

<style scoped>
#defaultButtonManagement {
  height: 100%;
}
</style>
