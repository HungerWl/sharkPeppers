// 档案统计
export default {
  path: '/archiveStatistics',
  name: 'ArchiveStatistics',
  meta: {
    title: 'menus.archiveStatistics',
    isHide: false,
    icon: 'icon-dangantongji',
    fixedTab: false,
    sortNo: 11,
  },
  children: [
    /* 可视化统计 */
    {
      path: '/archiveStatistics/visualizeStatistics',
      name: 'VisualizeStatistics',
      component: () => import('@/views/visualizeStatistics/index.vue'),
      meta: {
        title: 'menus.visualizeStatistics',
        isHide: false,
        icon: 'icon-shujufenxi',
        fixedTab: false,
        sortNo: 11,
      },
    },
    /* 基本统计 */
    {
      path: '/archiveStatistics/basicStatistics',
      name: 'BasicStatistics',
      component: () => import('@/views/basicStatistics/index.vue'),
      meta: {
        title: 'menus.basicStatistics',
        isHide: false,
        icon: 'icon-tongjifenxi',
        fixedTab: false,
        sortNo: 12,
      },
    },
  ],
}
