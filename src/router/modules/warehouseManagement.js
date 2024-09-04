// 库房管理
export default {
  path: '/warehouseManagement',
  name: 'WarehouseManagement',
  component: () => import('@/views/warehouseManagement/index.vue'),
  meta: {
    title: 'menus.warehouseManagement',
    isHide: false,
    icon: 'icon-kufangguanli',
    fixedTab: false,
    sortNo: 4,
  },
}
