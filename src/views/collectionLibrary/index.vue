<template>
    <el-main id="collectionLibrary">
        <!-- 档案目录 -->
        <div class="border w-72 h-full flex-shrink-0 p-2 bg-[#f2e6d8]" :class="themeClass">
            <div class="title pb-2">
                <span>档案目录</span>
            </div>
            <div class="directory-btns mb-2">
                <el-button type="primary" link @click="directoryFnc(0)">档案分类</el-button>
                <el-button type="primary" link @click="directoryFnc(1)">权限下发</el-button>
                <el-button type="primary" link @click="directoryFnc(2)">授权</el-button>
                <el-button type="primary" link @click="directoryFnc(3)">目录设置</el-button>
            </div>
            <el-tree style="width: 100%;overflow: auto;max-height: 80%" :data="treeData" :props="treeProps"
                @node-click="handleNodeClick" />
        </div>
        <!-- right -->
        <div class="border h-full flex-grow">
            <!-- 功能键 -->
            <div class="h-12 p-1 bg-[#91b7ba] flex justify-between items-center" :class="themeClass">
                功能键
                <button @click="openDialog">打开弹框</button>
            </div>
            <!-- 数据条 -->
            <div class="h-12 p-1  flex items-center">
                <SvgIcon name="icon-data" class="w-6 h-6 mr-1" :class="themeClass"></SvgIcon>
                <span class="mr-1">文件数量：{{ dataCounte?.fileCount }}</span>
                <span class="mr-1">附件数量：{{ dataCounte?.attachmentCount }}</span>
                <span class="mr-1">附件综合：{{ dataCounte?.attachmentTotal }}</span>
            </div>
            <!-- tab切换 -->
            <div class="p-1">
                <el-tabs tab-position="top">
                    <el-tab-pane :label="i.name" v-for="(i, idx) in tabs" :key="idx"></el-tab-pane>
                </el-tabs>
            </div>
            <!-- table -->
            <div class="p-1">
                <el-table :data="tableData" stripe style="width: 100%;" border>
                    <el-table-column type="index" width="50" label="#" />
                    <el-table-column prop="date" label="Date" width="180" />
                </el-table>
            </div>
        </div>
    </el-main>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useAppStore } from '@/stores/modules/app';
import { getMenu } from '../../api/collectionLibrary/collectionLibrary'
import SvgIcon from '@/components/svg-icon/index.vue'
import { useModal } from '@/hooks/useDialog';

const { showModal } = useModal();
const openDialog = () => {
    showModal(null, {
        title: '示例弹框', width: '600px', onClose: () => {
            console.log('弹框已关闭，执行一些逻辑');
            // 在这里可以执行任何关闭时的逻辑
        },
    },);
};

const appStore = useAppStore();
const themeClass = computed(() => {
    const theme = appStore.appConfig.theme;
    return theme === 'dark' ? 'dark-theme' : 'light-theme';
})

const userMenu = async () => {
    let form = new FormData();
    form.append('type', 1);
    let res = await getMenu({ type: 1 })
    console.log(res);
    treeData.value = res
}

const dataCounte = ref({
    fileCount: 0,
    attachmentCount: 0,
    attachmentTotal: 0
})

const treeData = ref([])
const treeProps = {
    children: 'children',
    label: 'name',
}

const handleNodeClick = (data) => {
    console.log(data);
}

const tabs = ref([{ name: "待入口" }, { name: "已入口" }, { name: "已退回" }])

const tableData = ref([])

/* 档案目录按钮 */
// 0 档案分类 1 权限下发 2 授权 3 目录设置
const directoryFnc = (value) => {
    switch (value) {
        case 0:
            break;
        case 1:
            console.log("权限下发");
            break;
        case 2:
            console.log("授权");
            break;
        case 3:
            console.log("目录设置");
            break;
        default:
            console.log("默认");
    }
}

onMounted(() => {
    // 在组件挂载后执行的逻辑
    userMenu()
});
</script>

<style scoped lang="scss">
.directory-btns {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;

    .el-button {
        padding: 0;
        margin: 0 10px 0 0
    }
}



/* 默认背景和文本颜色 */
#collectionLibrary {
    display: flex;
    height: 100%;
    box-sizing: border-box;
}

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

.modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 20px;
    border: 1px solid black;
}
</style>
