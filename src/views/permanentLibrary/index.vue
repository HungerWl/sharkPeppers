<template>
    <el-main id="collectionLibrary">
        <!-- 档案目录 -->
        <div class="border w-72 h-full flex-shrink-0 p-2 bg-[#f2e6d8]" :class="themeClass">
            <div class="title pb-2">
                <span>档案目录</span>
            </div>
            <el-tree style="width: 100%;overflow: auto;max-height: 80%" :data="treeData" :props="treeProps"
                @node-click="handleNodeClick" />
        </div>
        <!-- right -->
        <div class="border h-full flex-grow">
            <!-- 功能键 -->
            <div class="h-12 p-1 bg-[#91b7ba] flex justify-between items-center" :class="themeClass">
                功能键
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
                <el-table :data="tableData" stripe style="width: 100%" border>
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

onMounted(() => {
    // 在组件挂载后执行的逻辑
    userMenu()
});
</script>

<style scoped lang="scss">
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

.light-theme {}

/* 确保标题的字体颜色在不同主题下的适应 */
.title span {
    color: inherit;
    /* 使用父级的颜色 */
}
</style>
