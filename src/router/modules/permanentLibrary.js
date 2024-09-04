// 永久库
export default {
  path: '/permanentLibrary',
  name: 'PermanentLibrary',
  component: () => import('@/views/permanentLibrary/index.vue'),
  meta: {
    title: 'menus.permanentLibrary',
    isHide: false,
    icon: 'icon-sw_iconset_2003shebeishuju',
    fixedTab: false,
    sortNo: 11,
  },
}
