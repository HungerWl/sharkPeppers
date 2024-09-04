// 个人中心
export default {
  path: '/personalCenter',
  name: 'PersonalCenter',
  // component: () => import('@/views/home/index.vue'),
  meta: {
    title: 'menus.personalCenter',
    isHide: false,
    icon: 'icon-gerenzhongxin',
    fixedTab: false,
    sortNo: 20,
  },
  children: [
    {
      // 我的资料
      path: '/personalCenter/myProfile',
      name: 'myProfile',
      component: () => import('@/views/myProfile/index.vue'),
      meta: {
        title: 'menus.myProfile',
        isHide: false,
        icon: 'icon-wodeziliao',
        fixedTab: false,
        sortNo: 1,
      },
    },
    {
      // 我的借阅
      path: '/personalCenter/myBorrowing',
      name: 'myBorrowing',
      component: () => import('@/views/myBorrowing/index.vue'),
      meta: {
        title: 'menus.myBorrowing',
        isHide: false,
        icon: 'icon-wodejieyue',
        fixedTab: false,
        sortNo: 2,
      },
    },
    {
      // 我的任务
      path: '/personalCenter/myTask',
      name: 'myTask',
      component: () => import('@/views/myTask/index.vue'),
      meta: {
        title: 'menus.myTask',
        isHide: false,
        icon: 'icon-woderenwu',
        fixedTab: false,
        sortNo: 3,
      },
    },
  ],
}
