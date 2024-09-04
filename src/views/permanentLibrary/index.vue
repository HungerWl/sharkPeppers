<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { getMenu } from '../../api/collectionLibrary/collectionLibrary'
import { useModal } from '@/hooks/useDialog'

const router = useRouter()
const { showModal } = useModal()
function openDialog() {
  showModal(null, {
    title: '示例弹框',
    width: '600px',
    onClose: () => {
      console.log('弹框已关闭，执行一些逻辑')
      // 在这里可以执行任何关闭时的逻辑
    },
  })
}

// 功能键
function directoryFnc() { }

const tableData = ref([])
for (let i = 0; i < 100; i++) {
  tableData.value.push({
    date: '2016-05-02',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄',
  })
}
const pageObj = ref({
  currentPage: 1,
  showCount: 50,
  total: 0,
})

function size_change() { }
function current_change() { }

const treeData = ref([])
const treeProps = {
  children: 'children',
  label: 'name',
}
function handleNodeClick(data) {
  console.log(data)
}
async function userMenu() {
  const form = new FormData()
  form.append('type', 1)
  const res = await getMenu(form)
  treeData.value = res
}
userMenu()

const tabs = ref([{ name: '待入口' }, { name: '已入口' }, { name: '已退回' }])

// 附件预览
function attachmentPreview() {
  window.open('/sharkPeppers/#/attachePreview')
}
</script>

<template>
  <el-container id="collectionLibrary" class="p-2">
    <el-aside width="300px" class="left p-2 bg-[#f2e6d8]">
      <div class="title pb-2 text-[20px] font-bold border-b-[1px] border-[#ccc]">
        <span>档案目录</span>
      </div>
      <div class="directory-btns mb-1">
        <el-button type="primary" link @click="directoryFnc(0)">
          档案分类
        </el-button>
        <el-button type="primary" link @click="directoryFnc(1)">
          权限下发
        </el-button>
        <el-button type="primary" link @click="directoryFnc(2)">
          授权
        </el-button>
        <el-button type="primary" link @click="directoryFnc(3)">
          目录设置
        </el-button>
      </div>
      <el-tree
        style="width: 100%;overflow: auto;max-height: 80%" :data="treeData" :props="treeProps"
        @node-click="handleNodeClick"
      />
    </el-aside>
    <el-container class="right">
      <el-header>
        <!-- 功能键 -->
        <div class="h-[60px] bg-[#91b7ba] flex items-center">
          功能键
          <button @click="openDialog">
            打开弹框
          </button>
        </div>
      </el-header>
      <el-main class="right-main">
        <!-- tab切换 -->
        <el-tabs tab-position="top">
          <el-tab-pane v-for="(i, idx) in tabs" :key="idx" :label="i.name" />
        </el-tabs>
        <el-table :data="tableData" style="width: 100%; height:85%;" border>
          <el-table-column type="index" width="50" label="#" />
          <el-table-column prop="date" label="文件名称" min-width="120" show-overflow-tooltip />
          <el-table-column prop="date" label="档号" min-width="120" show-overflow-tooltip />
          <el-table-column prop="date" label="题名" min-width="120" show-overflow-tooltip />
          <el-table-column fixed="right" label="操作" width="300">
            <template #default>
              <el-button type="primary" @click="attachmentPreview">
                附件预览
              </el-button>
              <el-button type="primary">
                修改
              </el-button>
              <el-button type="primary">
                删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          :current-page="pageObj.currentPage" :page-sizes="[10, 20, 30, 50]"
          :page-size="pageObj.showCount" layout=" ->, total, sizes, prev, pager, next, jumper" :total="pageObj.total"
          class="p-2" @size-change="size_change" @current-change="current_change"
        />
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped lang="scss">
/* 默认背景和文本颜色 */
#collectionLibrary {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    display: flex;

    .el-header {
        padding: 0
    }

    .el-main {
        padding: 0;
    }

    :deep(.el-tabs__header) {
        margin-bottom: 10px !important;
    }

    .right-main {
        padding: 0 10px 10px 10px;
    }
}

.directory-btns {}

/* 暗色主题样式 */
.dark-theme {
    background-color: #1e1e1e !important;
    ;
    color: #fff !important;
    fill: #fff !important;
}

/* 确保标题的字体颜色在不同主题下的适应 */
.title span {
    color: inherit;
    /* 使用父级的颜色 */
}
</style>
