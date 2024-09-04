// 整理库
export default {
  path: '/organizeLibrary',
  name: 'OrganizeLibrary',
  component: () => import('@/views/organizeLibrary/index.vue'),
  meta: {
    title: 'menus.organizeLibrary',
    isHide: false,
    icon: 'organizeLibrary',
    fixedTab: false,
    sortNo: 2,
  },
}
