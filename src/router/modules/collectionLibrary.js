// 收集库
export default {
    path: '/collectionLibrary',
    name: 'CollectionLibrary',
    component: () => import('@/views/collectionLibrary/index.vue'),
    meta: {
        title: 'menus.collectionLibrary',
        isHide: false,
        icon: 'icon-baozhuangyinshua',
        fixedTab: false,
        sortNo: 6,
    },
}
