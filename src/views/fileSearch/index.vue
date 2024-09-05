<script setup>
import { onMounted, ref } from 'vue'
import { Picture, Search } from '@element-plus/icons-vue'

const tableData = ref([])
const form = ref({
  param: '',
})
onMounted(() => {

})
</script>

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
    </el-card>
    <el-table :data="tableData" border style="width: 100%;" height="480" />
  </el-main>
</template>

<style scoped>
#defaultButtonManagement {
  height: 100%;
}
</style>
