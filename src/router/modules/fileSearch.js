// 档案查询
export default {
    path: '/fileSearch',
    name: 'FileSearch',
    component: () => import('@/views/fileSearch/index.vue'),
    meta: {
        title: 'menus.fileSearch',
        isHide: false,
        icon: 'icon-wenzhanghuoke-',
        fixedTab: false,
        sortNo: 5,
    },
}
