// 服务利用
export default {
  path: '/serviceUtilization',
  name: 'ServiceUtilization',
  component: () => import('@/views/serviceUtilization/index.vue'),
  meta: {
    title: 'menus.serviceUtilization',
    isHide: true,
    icon: 'icon-fuwu_o',
    fixedTab: false,
    sortNo: 6,
  },
}
