import { baseApi } from '..'

export default [
  // 登录
  {
    url: `${baseApi}/admin/check`,
    method: 'post',
    response: () => {
      return {
        status: 200,
        data: JSON.stringify({
          "msg": "ip:192.168.3.125  mac:",
          "result": "success",
          "AUTH_TOKEN": "9ad5f3e4-dd31-4e8d-85e4-68aa6209926e",
          "userId": "072c68bcc2da4caeb9f2b02d5557da3f"
        })
      }
    },
  },
  // 登录页版本信息
  {
    url: `${baseApi}/main/getLogoList`,
    method: 'get',
    response: () => {
      return {
        status: 200,
        data: [{
          "index_title": "xxxxx大学",
          "system_name": "1",
          "background_img": "",
          "logo_img": "",
          "logo_mini": "",
          "icon_img": "",
          "school_motto": "测试校训",
          "mode_style": "",
          "name": "综合档案管理系统",
          "version": "5.0",
          "mode": "",
        }]
      }
    },
  },
  // 用户信息
  {
    url: `${baseApi}/head/getInfo`,
    method: 'post',
    response: () => {
      return {
        "result": "success",
        "userPhoto": "assets/images/user/avatar-2.jpg",
        "PHONE": "18222289898",
        "organization": {
          "id": 2,
          "name": "档案室",
          "orgCode": "dag",
          "forShort": null,
          "level": null,
          "parentId": 1,
          "sortOrder": 1,
          "responsiblePerson": "[\"keyan1\",\"shebei2\"]",
          "phone": "222222",
          "email": "22222",
          "createdTime": "2024-05-21 11:02:47",
          "status": "0",
          "child": null,
          "hasChild": false,
          "roleIdList": "[\"e7de671a9d4749e488f13b02d6e94c9b\",\"e0f483bb8b6c4582b3f99824e16d5d7e\"]"
        },
        "BZ": "sysdba",
        "sysName": "AD",
        "USERNAME": "sysdba",
        "onlineAdress": "192.168.3.159:8179",
        "EMAIL": "qq@123.com",
        "roleList": [
          {
            "del_QX": "748294548142485043022609503083335800227680963526658",
            "add_QX": "748294548142485043022609503083335800227680963526658",
            "cha_QX": "748294548142485209176108976197819913203563498569730",
            "edit_QX": "748294548142485043022609503083335800227680963526658",
            "rnumber": "SYSDBA",
            "role_ID": "e7de671a9d4749e488f13b02d6e94c9b",
            "parent_ID": "1",
            "children": null,
            "rights": "194819247630735467449793366786338431082001361864115358729515983654652739584",
            "role_NAME": "sysdba"
          }
        ],
        "NAME": "安全保密管理员",
        "wimadress": "10.20.17.109:8879"
      }
    },
  },
  // 菜单
  {
    url: `${baseApi}/main/index`,
    method: 'post',
    response: () => {
      return {
        status: 200,
        data: [
          {
            "path": "/archiveStatistics",
            "name": "ArchiveStatistics",
            "component": "archiveStatistics",
            "meta": {
              "title": "menus.archiveStatistics",
              "isHide": false,
              "icon": "icon-dangantongji",
              "fixedTab": false,
              "sortNo": 11
            },
            "children": [
              {
                "path": "/archiveStatistics/visualizeStatistics",
                "name": "VisualizeStatistics",
                "component": "visualizeStatistics",
                "meta": {
                  "title": "menus.visualizeStatistics",
                  "isHide": false,
                  "icon": "icon-shujufenxi",
                  "fixedTab": false,
                  "sortNo": 11
                }
              },
              {
                "path": "/archiveStatistics/basicStatistics",
                "component": "basicStatistics",
                "name": "BasicStatistics",
                "meta": {
                  "title": "menus.basicStatistics",
                  "isHide": false,
                  "icon": "icon-tongjifenxi",
                  "fixedTab": false,
                  "sortNo": 12
                }
              }
            ]
          },
          {
            "path": "/archivesCompilationAndResearch",
            "name": "ArchivesCompilationAndResearch",
            "component": "archivesCompilationAndResearch",
            "meta": {
              "title": "menus.archivesCompilationAndResearch",
              "isHide": false,
              "icon": "icon-zhuanxiangyanshou",
              "fixedTab": false,
              "sortNo": 11
            }
          },
          {
            "path": "/collectionLibrary",
            "name": "CollectionLibrary",
            "component": "collectionLibrary",
            "meta": {
              "title": "menus.collectionLibrary",
              "isHide": false,
              "icon": "icon-baozhuangyinshua",
              "fixedTab": false,
              "sortNo": 2
            }
          },
          {
            "path": "/fileSearch",
            "name": "FileSearch",
            "component": "fileSearch",
            "meta": {
              "title": "menus.fileSearch",
              "isHide": false,
              "icon": "icon-wenzhanghuoke-",
              "fixedTab": false,
              "sortNo": 5
            }
          },
          {
            "path": "/home",
            "name": "Home",
            "component": "home",
            "meta": {
              "title": "menus.home",
              "isHide": false,
              "icon": "icon-tongjizhongxin",
              "fixedTab": false,
              "sortNo": 1
            }
          },
          {
            "path": "/organizeLibrary",
            "name": "OrganizeLibrary",
            "component": "organizeLibrary",
            "meta": {
              "title": "menus.organizeLibrary",
              "isHide": false,
              "icon": "organizeLibrary",
              "fixedTab": false,
              "sortNo": 2
            }
          },
          {
            "path": "/permanentLibrary",
            "name": "PermanentLibrary",
            "component": "permanentLibrary",
            "meta": {
              "title": "menus.permanentLibrary",
              "isHide": false,
              "icon": "icon-sw_iconset_2003shebeishuju",
              "fixedTab": false,
              "sortNo": 3
            }
          },
          {
            "path": "/personalCenter",
            "name": "PersonalCenter",
            "component": "personalCenter",
            "meta": {
              "title": "menus.personalCenter",
              "isHide": false,
              "icon": "icon-gerenzhongxin",
              "fixedTab": false,
              "sortNo": 20
            },
            "children": [
              {
                "path": "/personalCenter/myProfile",
                "name": "myProfile",
                "component": "myProfile",
                "meta": {
                  "title": "menus.myProfile",
                  "isHide": false,
                  "icon": "icon-wodeziliao",
                  "fixedTab": false,
                  "sortNo": 1
                }
              },
              {
                "path": "/personalCenter/myBorrowing",
                "name": "myBorrowing",
                "component": "myBorrowing",
                "meta": {
                  "title": "menus.myBorrowing",
                  "isHide": false,
                  "icon": "icon-wodejieyue",
                  "fixedTab": false,
                  "sortNo": 2
                }
              },
              {
                "path": "/personalCenter/myTask",
                "name": "myTask",
                "component": "myTask",
                "meta": {
                  "title": "menus.myTask",
                  "isHide": false,
                  "icon": "icon-woderenwu",
                  "fixedTab": false,
                  "sortNo": 3
                }
              }
            ]
          },
          {
            "path": "/serviceUtilization",
            "name": "ServiceUtilization",
            "component": "serviceUtilization",
            "meta": {
              "title": "menus.serviceUtilization",
              "isHide": false,
              "icon": "icon-fuwu_o",
              "fixedTab": false,
              "sortNo": 6
            }
          },
          {
            "path": "/system",
            "name": "System",
            "component": "system",
            "meta": {
              "title": "menus.system",
              "isHide": false,
              "icon": "icon-xitongguanli",
              "fixedTab": false,
              "sortNo": 3
            },
            "children": [
              {
                "path": "/system/defaultButtonManagement",
                "name": "DefaultButtonManagement",
                "component": "defaultButtonManagement",
                "meta": {
                  "title": "menus.defaultButtonManagement",
                  "isHide": false,
                  "icon": "icon-anniuguanli",
                  "fixedTab": false,
                  "sortNo": 1
                }
              },
              {
                "path": "/system/templateManagement",
                "name": "TemplateManagement",
                "component": "templateManagement",
                "meta": {
                  "title": "menus.templateManagement",
                  "isHide": false,
                  "icon": "icon-wodemoban",
                  "fixedTab": false,
                  "sortNo": 2
                }
              },
              {
                "path": "/system/notificationAnnouncement",
                "name": "NotificationAnnouncement",
                "component": "notificationAnnouncement",
                "meta": {
                  "title": "menus.notificationAnnouncement",
                  "isHide": false,
                  "icon": "icon-tongzhigonggao",
                  "fixedTab": false,
                  "sortNo": 3
                }
              },
              {
                "path": "/system/menuManagement",
                "name": "MenuManagement",
                "component": "menuManagement",
                "meta": {
                  "title": "menus.menuManagement",
                  "isHide": false,
                  "icon": "icon-caidanguanli",
                  "fixedTab": false,
                  "sortNo": 4
                }
              },
              {
                "path": "/system/archiveChapterSettings",
                "name": "ArchiveChapterSettings",
                "component": "archiveChapterSettings",
                "meta": {
                  "title": "menus.archiveChapterSettings",
                  "isHide": false,
                  "icon": "icon-guidang",
                  "fixedTab": false,
                  "sortNo": 5
                }
              },
              {
                "path": "/system/roleManagement",
                "name": "RoleManagement",
                "component": "roleManagement",
                "meta": {
                  "title": "menus.roleManagement",
                  "isHide": false,
                  "icon": "icon-navicon-jsgl",
                  "fixedTab": false,
                  "sortNo": 6
                }
              },
              {
                "path": "/system/institutionalSectorManagement",
                "name": "InstitutionalSectorManagement",
                "component": "institutionalSectorManagement",
                "meta": {
                  "title": "menus.institutionalSectorManagement",
                  "isHide": false,
                  "icon": "icon-jigouguanli",
                  "fixedTab": false,
                  "sortNo": 7
                }
              }
            ]
          },
          {
            "path": "/warehouseManagement",
            "name": "WarehouseManagement",
            "component": "warehouseManagement",
            "meta": {
              "title": "menus.warehouseManagement",
              "isHide": false,
              "icon": "icon-kufangguanli",
              "fixedTab": false,
              "sortNo": 4
            }
          },
        ]
      }
    }
  }
]
