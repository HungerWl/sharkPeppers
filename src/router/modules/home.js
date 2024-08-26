// 统计中心
export default {
  path: '/home',
  name: 'Home',
  component: () => import('@/views/home/index.vue'),
  meta: {
    title: 'menus.home',
    isHide: false,
    icon: 'icon-tongjizhongxin',
    fixedTab: false,
    sortNo: 1,
  },
}
