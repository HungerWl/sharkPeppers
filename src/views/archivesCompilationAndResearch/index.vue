<template>
  <el-container id="archives" class="p-3">
    <div class="sign-button mr-2">
      <div @click="toggleAside">
        {{ isAsideVisible ? '关闭目录' : '打开目录' }}
      </div>
    </div>
    <el-aside
      v-if="isAsideVisible" width="350px"
      class="aside-content border border-gray-300 rounded-lg p-4 pt-2 bg-white dark:bg-[#1e1f22] mr-2"
    >
      <div class="fnc-button mb-2">
        <div class="button-items">
          <el-button type="primary" link>
            新增编研
          </el-button>
          <el-button type="primary" link>
            批量导出
          </el-button>
          <el-button type="primary" link>
            编研模块
          </el-button>
        </div>
      </div>
      <div class="tree-content border-t border-b border-gray-300 mb-4">
        <el-tree
          :data="treeData" :props="treeProps" style="width: 100%;" show-checkbox class="p-2"
          @node-click="handleNodeClick"
        >
          <template #default="{ data }">
            <div class="truncate w-full" :title="data.moduleName || data.name">
              <span v-if="data.moduleName" class="truncate">
                <span>{{ data.moduleName }}</span>
              </span>
              <span>{{ data.name }}</span>
            </div>
          </template>
        </el-tree>
      </div>
      <el-table :data="tableData" class="shadow-md" style="width: 100%" border @row-click="rowClick">
        <el-table-column type="index" width="50" label="#" />
        <el-table-column prop="name" label="文件名称" min-width="120" show-overflow-tooltip />
        <el-table-column prop="format" label="格式" min-width="120" show-overflow-tooltip />
      </el-table>
    </el-aside>
    <el-main class="main-conten">
      <section class="w-full h-full flex">
        <div
          class="flex justify-center items-center flex-1 border border-gray-300 rounded-lg  bg-white dark:bg-[#1e1f22] mr-2"
          style="height: 100%;"
        >
          <!-- lottie -->
          <div v-show="!isVideo && !isImg && !isDoc" ref="lottieView" class="w-full h-full" />
          <!-- video -->
          <video v-show="isVideo" class="w-full" :src="dataSrc" muted controls title="双击放大" />
          <!-- image -->
          <el-image v-show="isImg" style="width: 100%;" :src="dataSrc" fit="fill" :preview-src-list="srcList" />
          <!-- office -->
          <div v-show="isDoc" id="Docs" class="w-full h-full" />
          <!-- defaut -->
        </div>
        <div
          class="flex justify-center items-center flex-1 border border-gray-300 rounded-lg  bg-white dark:bg-[#1e1f22]"
        >
          <div ref="lottieEdit" class="w-[50%] h-[50%]" />
        </div>
      </section>
    </el-main>
  </el-container>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import lottie from 'lottie-web'
import { getFile, getFilesTable, getModuleTreeList } from '@/api/archivesCompilationAndResearch'

const lottieView = ref(null)
const lottieEdit = ref(null)

const treeData = ref([])
const treeProps = {
  children: 'child',
  label: 'name',
  disabled: data => data.moduleName,
}

const tableData = ref([])

async function handleNodeClick(value) {
  if (!value.id)
    return
  const formData = new FormData()
  formData.append('bscDirId', value.id)
  tableData.value = await getFilesTable(formData)
}

async function getTreeData() {
  const res = await getModuleTreeList({})
  treeData.value = res
}

function documentType(value) {
  if (['xls', 'xlsx'].includes(value))
    return 'cell'
  if (['docx', 'doc'].includes(value))
    return 'word'
  if (value === 'pdf')
    return 'pdf'
  return null
}

const fileTypes = {
  document: ['docx', 'doc', 'xls', 'xlsx', 'pdf'],
  image: ['png', 'jpeg', 'jpg'],
  video: ['mp4'],
}

const isDocument = format => fileTypes.document.includes(format)
const isImageType = format => fileTypes.image.includes(format)
const isVideoType = format => fileTypes.video.includes(format)

// office实例
const officeInstance = ref(null)
const isDoc = ref(false)
const isVideo = ref(false)
const isImg = ref(false)
const dataSrc = ref()
const srcList = ref([])

async function rowClick(value) {
  const { format, name, path } = value
  const baseUrl = JSON.parse(import.meta.env.VITE_DEV_PROXY)['/api']
  const token = JSON.parse(sessionStorage.getItem('WL_ADMIN_USER')).token

  const type = format
  isDoc.value = isDocument(type)
  isImg.value = isImageType(type)
  isVideo.value = isVideoType(type)

  if (officeInstance.value) {
    officeInstance.value.destroyEditor()
    officeInstance.value = null
  }
  const documentUrl = `${baseUrl}bsc/getFile?AUTH_TOKEN=${token}&path=${path}`
  const callbackUrl = `${baseUrl}bscDirFile/onlyOfficeEditCallback?AUTH_TOKEN=${token}&path=${path}`
  const config = {
    document: { type, title: name, url: documentUrl },
    documentType: documentType(type),
    editorConfig: { callbackUrl, lang: 'zh', mode: 'view' },
  }

  const params = {
    AUTH_TOKEN: token,
    path: value.path,
  }
  switch (true) {
    case isDoc.value:
      officeInstance.value = new DocsAPI.DocEditor('Docs', config)
      break
    case isImg.value:
    case isVideo.value:
      // eslint-disable-next-line no-case-declarations
      const res = await getFile(params, 'blob')
      dataSrc.value = URL.createObjectURL(res)
      srcList.value = [dataSrc.value]
    // eslint-disable-next-line no-fallthrough
    default:
      break
  }
}
const isAsideVisible = ref(true)
function toggleAside() {
  isAsideVisible.value = !isAsideVisible.value
}

onMounted(() => {
  getTreeData()
  // 加载 Lottie 动画
  lottie.loadAnimation({
    container: lottieView.value,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: new URL('@/assets/lottie/empty-doc.json', import.meta.url).href, // 确保路径正确
  })
  lottie.loadAnimation({
    container: lottieEdit.value,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: new URL('@/assets/lottie/empty-edit.json', import.meta.url).href, // 确保路径正确
  })
})
</script>

<style scoped lang="scss">
* {
  box-sizing: border-box;
}

#archives {
  height: 100%;
}

.aside-content {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.tree-content {
  max-height: 300px;
  /* 固定高度，可以根据需要调整 */
  overflow: auto;
  /* 当内容超出时出现滚动条 */
  margin-bottom: 10px;
}

.el-main {
  padding: 0 !important;
}

.fnc-button {
  display: flex;
  align-items: center;
  position: relative;

  .button-items {
    width: 80%;
  }

  .el-button {
    margin: 0;
  }

  .el-icon {
    position: absolute;
    right: 0px;
    top: 7px;
  }
}

// 侧边栏标签样式
.sign-button>div {
  writing-mode: vertical-rl;
  /* 垂直方向从右到左 */
  text-align: center;
  /* 文本居中 */
  padding: 6px;
  margin-bottom: 10px;
  /* 底部外边距 */
  font-size: 18px;
  /* 字体大小 */
  font-weight: bold;
  /* 字体加粗 */
  color: #333;
  /* 字体颜色 */
  background: linear-gradient(to bottom, #e6e6e6, #f9f9f9);
  /* 渐变背景色 */
  border-radius: 5px;
  /* 圆角边框 */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  /* 添加按钮阴影 */
  transition: background-color 0.3s, transform 0.3s;
  /* 过渡动画 */
  cursor: pointer;
  /* 鼠标指针样式 */
}
</style>
