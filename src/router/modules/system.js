// 系统管理
export default {
  path: '/system',
  name: 'System',
  meta: {
    title: 'menus.system',
    isHide: false,
    icon: 'icon-xitongguanli',
    fixedTab: false,
    sortNo: 3,
  },
  children: [
    {
      // 默认按钮管理
      path: '/system/defaultButtonManagement',
      name: 'DefaultButtonManagement',
      component: () => import('@/views/defaultButtonManagement/index.vue'),
      meta: {
        title: 'menus.defaultButtonManagement',
        isHide: false,
        icon: 'icon-anniuguanli',
        fixedTab: false,
        sortNo: 1,
      },
    },
    {
      // 模板管理
      path: '/system/templateManagement',
      name: 'TemplateManagement',
      component: () => import('@/views/templateManagement/index.vue'),
      meta: {
        title: 'menus.templateManagement',
        isHide: true,
        icon: 'icon-wodemoban',
        fixedTab: false,
        sortNo: 2,
      },
    },
    {
      // 通知公告
      path: '/system/notificationAnnouncement',
      name: 'NotificationAnnouncement',
      component: () => import('@/views/notificationAnnouncement/index.vue'),
      meta: {
        title: 'menus.notificationAnnouncement',
        isHide: false,
        icon: 'icon-tongzhigonggao',
        fixedTab: false,
        sortNo: 3,
      },
    },
    {
      // 菜单管理
      path: '/system/menuManagement',
      name: 'MenuManagement',
      component: () => import('@/views/menuManagement/index.vue'),
      meta: {
        title: 'menus.menuManagement',
        isHide: true,
        icon: 'icon-caidanguanli',
        fixedTab: false,
        sortNo: 4,
      },
    },
    {
      // 归档章管理
      path: '/system/archiveChapterSettings',
      name: 'ArchiveChapterSettings',
      component: () => import('@/views/archiveChapterSettings/index.vue'),
      meta: {
        title: 'menus.archiveChapterSettings',
        isHide: true,
        icon: 'icon-guidang',
        fixedTab: false,
        sortNo: 5,
      },
    },
    {
      // 角色管理
      path: '/system/roleManagement',
      name: 'RoleManagement',
      component: () => import('@/views/roleManagement/index.vue'),
      meta: {
        title: 'menus.roleManagement',
        isHide: true,
        icon: 'icon-navicon-jsgl',
        fixedTab: false,
        sortNo: 6,
      },
    },
    {
      // 机构部门管理
      path: '/system/institutionalSectorManagement',
      name: 'InstitutionalSectorManagement',
      component: () => import('@/views/institutionalSectorManagement/index.vue'),
      meta: {
        title: 'menus.institutionalSectorManagement',
        isHide: false,
        icon: 'icon-jigouguanli',
        fixedTab: false,
        sortNo: 7,
      },
    },
  ],
}
