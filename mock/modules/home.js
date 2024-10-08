import { baseApi } from '..'

export default [
    // 通知公告
    {
        url: `${baseApi}/fhsms/getNoticeList`,
        method: 'get',
        response: () => {
            return {
                "status": 200,
                "data": {
                    "varList": [
                        {
                            "PUBLISHER": "sysadmin(系统管理员)",
                            "CATEGORY": "通知",
                            "TYPETOP": 0,
                            "TITLE": "内置数据类型",
                            "ID": "1a3c323b-a6f4-464a-bf1e-9cf9dbc56cbb",
                            "PUBLISH_DATE": "2024-05-06 14:58:55",
                            "PUBLISH": "1",
                            "CONTEXT": "内置数据类型内置数据类型",
                            "REMARK": "内置数据类型",
                            "TYPEINDEX": "1"
                        },
                        {
                            "PUBLISHER": "sysadmin(系统管理员)",
                            "CATEGORY": "通知",
                            "TYPETOP": 0,
                            "TITLE": "python基础练习-数字不同111之和",
                            "ID": "deb98047-18ac-48ac-82b6-5358c61f86b3",
                            "PUBLISH_DATE": "2024-05-06 14:58:25",
                            "PUBLISH": "1",
                            "CONTEXT": "python基础练习-数字不同数之和python基础练习-数字不同数之和python基础练习-数字不同数之和",
                            "REMARK": "python基础练习-数字不同数之和python基础练习-数字不同数之和",
                            "TYPEINDEX": "1"
                        },
                        {
                            "PUBLISHER": "sysadmin(系统管理员)",
                            "CATEGORY": "通知",
                            "TYPETOP": 0,
                            "TITLE": "python基础练习-数字不同数之和",
                            "ID": "92564473-86a7-44e3-bb4a-fe0011bcd356",
                            "PUBLISH_DATE": "2024-04-24 15:15:47",
                            "PUBLISH": "1",
                            "CONTEXT": "python基础练习-数字不同数之和\n",
                            "REMARK": "python基础练习-数字不同数之和\n",
                            "TYPEINDEX": "1"
                        },
                        {
                            "PUBLISHER": "sysadmin(系统管理员)",
                            "CATEGORY": "通知",
                            "TYPETOP": 0,
                            "TITLE": "推动高质量发展系列主题新闻发布会】以更大担当作为谱写辽宁全面振兴新篇章",
                            "ID": "8e2591ae-0648-41b2-907c-f4d9d451409b",
                            "PUBLISH_DATE": "2024-04-24 09:56:07",
                            "PUBLISH": "1",
                            "CONTEXT": "【推动高质量发展系列主题新闻发布会】以更大担当作为谱写辽宁全面振兴新篇章",
                            "REMARK": "【推动高质量发展系列主题新闻发布会】以更大担当作为谱写辽宁全面振兴新篇章",
                            "TYPEINDEX": "0"
                        },
                        {
                            "PUBLISHER": "sysadmin(系统管理员)",
                            "CATEGORY": "通知",
                            "TYPETOP": 0,
                            "TITLE": "推动高质量发展系列主题新闻发布会】以更大担当作为谱写辽宁全面振兴新篇章",
                            "ID": "f7debabb-547d-416b-9f7c-e5926a577f35",
                            "PUBLISH_DATE": "2024-04-24 09:55:32",
                            "PUBLISH": "1",
                            "CONTEXT": "推动高质量发展系列主题新闻发布会】以更大担当作为谱写辽宁全面振兴新篇章",
                            "REMARK": "推动高质量发展系列主题新闻发布会】以更大担当作为谱写辽宁全面振兴新篇章",
                            "TYPEINDEX": "0"
                        },
                        {
                            "PUBLISHER": "sysadmin(系统管理员)",
                            "CATEGORY": "通知",
                            "TYPETOP": 0,
                            "TITLE": "【推动高质量发展系列主题新闻发布会】以更大担当作为谱写辽宁全面振兴新篇章",
                            "ID": "4d5a7a5e-0060-46e3-81c0-e72e86699099",
                            "PUBLISH_DATE": "2024-04-24 09:54:55",
                            "PUBLISH": "1",
                            "CONTEXT": "【推动高质量发展系列主题新闻发布会】以更大担当作为谱写辽宁全面振兴新篇章",
                            "REMARK": "【推动高质量发展系列主题新闻发布会】以更大担当作为谱写辽宁全面振兴新篇章",
                            "TYPEINDEX": "0"
                        },
                        {
                            "PUBLISHER": "sysadmin(系统管理员)",
                            "CATEGORY": "通知",
                            "TYPETOP": 0,
                            "TITLE": "【推动高质量发展系列主题新闻发布会】以更大担当作为谱写辽宁全面振兴新篇章",
                            "ID": "9f7478f4-f372-460e-87d4-07dc93ac0375",
                            "PUBLISH_DATE": "2024-04-24 09:54:40",
                            "PUBLISH": "1",
                            "CONTEXT": "【推动高质量发展系列主题新闻发布会】以更大担当作为谱写辽宁全面振兴新篇章",
                            "REMARK": "【推动高质量发展系列主题新闻发布会】以更大担当作为谱写辽宁全面振兴新篇章",
                            "TYPEINDEX": "0"
                        },
                        {
                            "PUBLISHER": "sysadmin(系统管理员)",
                            "CATEGORY": "通知",
                            "TYPETOP": 0,
                            "TITLE": "南京艾档信息技术有限公司",
                            "ID": "5396ce77-4dac-473e-8753-ca82e8ab759c",
                            "PUBLISH_DATE": "2023-10-17 14:31:45",
                            "PUBLISH": "1",
                            "CONTEXT": "111",
                            "REMARK": "111",
                            "TYPEINDEX": "0"
                        },
                        {
                            "PUBLISHER": "sysdba(数据管理员)",
                            "CATEGORY": "通知",
                            "TYPETOP": 0,
                            "TITLE": "南京艾档信息技术有限公司11",
                            "ID": "011b1e93-d2d0-4b86-a0bc-d03d5062d0ac",
                            "PUBLISH_DATE": "2022-06-10 15:14:26",
                            "PUBLISH": "1",
                            "CONTEXT": "sdf",
                            "REMARK": "adf",
                            "TYPEINDEX": "0"
                        }
                    ],
                },
                "msg": "请求成功"
            }

        },
    },
    // 文件共享
    {
        url: `${baseApi}/share/getShareList`,
        method: 'get',
        response: () => {
            return {
                status: 200,
                data: {
                    varList: [
                        {
                            "NOTES": "1",
                            "CREATED_TIME": "2024-04-11 16:17:42",
                            "DTEXT": "[{\"path\":\"D:/workDeploy/da53e567a353924ad98ea2992e5418d135.pdf\",\"fileName\":\"1992,DQ13,18,8.pdf\",\"suffix\":\"pdf\"}]",
                            "DESCRIPTION": "1",
                            "ROLE_PERMISSION": "sysdba",
                            "TYPETOP": 1,
                            "UPLOAD_TIME": "2024-04-11 16:17:42",
                            "ENABLED": "1",
                            "ID": "17af5b028760467f96bef60e7a8eb3a3",
                            "SORTING_ORDER": 1,
                            "NAME": "南京艾档信息技术有限公司"
                        },
                        {
                            "NOTES": "5",
                            "CREATED_TIME": "2024-04-12 15:59:52",
                            "DTEXT": "[{\"path\":\"/share/e13a630231dd4672acdc64958c556f4b.JPG\",\"fileName\":\"8A9R8899 - 副本 - 副本.JPG\",\"suffix\":\"JPG\"}]",
                            "DESCRIPTION": "5",
                            "ROLE_PERMISSION": "sysdba",
                            "TYPETOP": 0,
                            "UPLOAD_TIME": "2024-04-12 15:59:52",
                            "ENABLED": "1",
                            "ID": "d1f935e8dce14ce488fab978ab6e19fe",
                            "SORTING_ORDER": 1,
                            "NAME": "南京艾档信息技术有限公司"
                        },
                        {
                            "NOTES": "4",
                            "CREATED_TIME": "2024-04-12 15:42:58",
                            "DTEXT": "[{\"path\":\"D:/workDeploy/da/f34a0c3c71dc46e096a2fdf3eeb507bf.jpg\",\"fileName\":\"6A9R8411 - 副本 - 副本 - 副本.jpg\",\"suffix\":\"jpg\"}]",
                            "DESCRIPTION": "4",
                            "ROLE_PERMISSION": "sysdba",
                            "TYPETOP": 0,
                            "UPLOAD_TIME": "2024-04-12 15:42:58",
                            "ENABLED": "1",
                            "ID": "e298659b15ed4ab49562af85c4941043",
                            "SORTING_ORDER": 1,
                            "NAME": "4"
                        },
                        {
                            "NOTES": "3",
                            "CREATED_TIME": "2024-04-11 16:59:14",
                            "DTEXT": "[{\"path\":\"D:/workDeploy/da\\\\b454721b17b54403aed7978b2e3d8e42.JPG\",\"fileName\":\"8A9R8899 - 副本 - 副本.JPG\",\"suffix\":\"JPG\"}]",
                            "DESCRIPTION": "3",
                            "ROLE_PERMISSION": "sysdba",
                            "TYPETOP": 0,
                            "UPLOAD_TIME": "2024-04-11 16:59:14",
                            "ENABLED": "1",
                            "ID": "86906737088d41ae9d68dd47e00ba910",
                            "SORTING_ORDER": 1,
                            "NAME": "南京艾档信息技术有限公司"
                        },
                        {
                            "NOTES": "2",
                            "CREATED_TIME": "2024-04-11 16:53:56",
                            "DTEXT": "[{\"path\":\"D:/workDeploy/da747c3051d6684e0fa6c703ce1cddaae9.jpg\",\"fileName\":\"6A9R8411 - 副本 - 副本 - 副本.jpg\",\"suffix\":\"jpg\"}]",
                            "DESCRIPTION": "2",
                            "ROLE_PERMISSION": "sysdba",
                            "TYPETOP": 0,
                            "UPLOAD_TIME": "2024-04-11 16:53:56",
                            "ENABLED": "1",
                            "ID": "ebb64cdcbb1d4f49ae3980a9eec5d881",
                            "SORTING_ORDER": 1,
                            "NAME": "2"
                        },
                        {
                            "NOTES": "",
                            "CREATED_TIME": "2024-04-11 16:10:44",
                            "DTEXT": "[{\"path\":\"D:/workDeploy/dac437045a11e347168d60bad170307b97.JPG\",\"fileName\":\"8A9R8899 - 副本 (2).JPG\",\"suffix\":\"JPG\"}]",
                            "DESCRIPTION": "",
                            "ROLE_PERMISSION": "sysdba",
                            "TYPETOP": 0,
                            "UPLOAD_TIME": "2024-04-11 16:10:44",
                            "ENABLED": "1",
                            "ID": "6c1daf8b9f204f4e936aa0dadf7b4669",
                            "SORTING_ORDER": 1,
                            "NAME": "南京艾档信息技术有限公司"
                        },
                        {
                            "NOTES": "",
                            "CREATED_TIME": "2024-01-08 11:10:44",
                            "DTEXT": "[{\"path\":\"/sharingFile/0e1e1014c5af45a699e106fd23d1ba87.pdf\",\"fileName\":\"2023,SX12,001,0000.pdf\",\"suffix\":\"pdf\"},{\"path\":\"/sharingFile/b61cbfa510b94c78a972072f9ea14fbd.pdf\",\"fileName\":\"2023-JJ12-011.pdf\",\"suffix\":\"pdf\"}]",
                            "DESCRIPTION": "第一份xxx",
                            "ROLE_PERMISSION": "sysdba",
                            "TYPETOP": 0,
                            "UPLOAD_TIME": "2024-01-08 11:10:44",
                            "ENABLED": "1",
                            "ID": "764b58573a6742fb83c51e168e406afb",
                            "SORTING_ORDER": 1,
                            "NAME": "南京艾档信息技术有限公司"
                        },
                        {
                            "NOTES": "",
                            "CREATED_TIME": "2024-01-08 02:42:14",
                            "DTEXT": "[{\"path\":\"/sharingFile/94dbfcdfe7654d1da10e1597a8fb3268.docx\",\"fileName\":\"安全狗客户端安装指导手册.docx\",\"suffix\":\"docx\"}]",
                            "DESCRIPTION": "",
                            "ROLE_PERMISSION": "sysdba",
                            "TYPETOP": 0,
                            "UPLOAD_TIME": "2024-01-08 02:42:14",
                            "ENABLED": "1",
                            "ID": "76cb4f27436047adbaf857eb3eef017e",
                            "SORTING_ORDER": 1,
                            "NAME": "南京艾档信息技术有限公司"
                        }
                    ]
                }
            }
        },
    },
]
