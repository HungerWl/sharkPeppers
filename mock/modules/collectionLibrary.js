import { baseApi } from '..'
export default [
    {
        url: `${baseApi}/rolePermission/classTreeAuthorized`,
        method: 'post',
        response: () => {
            return {
                "status": 200,
                "data": [
                    {
                        "children": [
                            {
                                "tbname": "cbdaa",
                                "children": [],
                                "hasChildren": false,
                                "name": "出版档案",
                                "id": "20198fc0adb841a19758bbbc84ab6236",
                                "type": 1,
                                "nodeType": 1,
                                "params": "{\"ZTID\":\"1\"}",
                                "parentId": "1",
                                "order": 1,
                                "status": "01"
                            },
                            {
                                "tbname": "",
                                "children": [],
                                "hasChildren": false,
                                "name": "党群档案",
                                "id": "5ec06b674de94f6ea38f3f802f30a04e",
                                "type": 1,
                                "nodeType": 0,
                                "params": "",
                                "parentId": "1",
                                "order": 1,
                                "status": "01"
                            },
                            {
                                "tbname": "",
                                "children": [],
                                "hasChildren": false,
                                "name": "财会档案",
                                "id": "15b71bdbd06345b3ac259eacd56aa62f",
                                "type": 1,
                                "nodeType": 0,
                                "params": "",
                                "parentId": "1",
                                "order": 1,
                                "status": "01"
                            },
                            {
                                "tbname": "",
                                "children": [
                                    {
                                        "tbname": "keda",
                                        "children": [],
                                        "hasChildren": false,
                                        "name": "案卷管理",
                                        "id": "aa3f908971f745348e9f266a05e2eda5",
                                        "type": 1,
                                        "nodeType": 1,
                                        "params": "",
                                        "parentId": "c16fa287b7424b17a2f7f92be2b43bf6",
                                        "order": 1,
                                        "status": "01"
                                    }
                                ],
                                "hasChildren": true,
                                "name": "科研档案",
                                "id": "c16fa287b7424b17a2f7f92be2b43bf6",
                                "type": 1,
                                "nodeType": 0,
                                "params": "",
                                "parentId": "1",
                                "order": 1,
                                "status": "01"
                            },
                            {
                                "tbname": "bksbyz",
                                "children": [],
                                "hasChildren": false,
                                "name": "123",
                                "id": "3b3495c44aac4d34838fea966b8978e9",
                                "type": 1,
                                "nodeType": 1,
                                "params": "123",
                                "archivesTableId": "2442f887ce9342b08a4d5c86c43eaf9a",
                                "parentId": "1",
                                "order": 1,
                                "status": "01"
                            },
                            {
                                "tbname": "jxda",
                                "children": [],
                                "hasChildren": false,
                                "name": "教学档案",
                                "id": "2e1ae3384db04c0b976993c370df9e63",
                                "type": 1,
                                "nodeType": 1,
                                "params": "",
                                "parentId": "1",
                                "order": 2,
                                "status": "01"
                            },
                            {
                                "tbname": "",
                                "children": [
                                    {
                                        "tbname": "",
                                        "children": [
                                            {
                                                "tbname": "jjda",
                                                "children": [],
                                                "hasChildren": false,
                                                "name": "案卷目录",
                                                "id": "c028acce42174ebea178faf2431c5a49",
                                                "type": 1,
                                                "nodeType": 1,
                                                "params": "{\"ZTID\":\"1\"}",
                                                "parentId": "1c2d5057742d4f23addd20095356e929",
                                                "order": 1,
                                                "status": "01"
                                            },
                                            {
                                                "tbname": "jjda",
                                                "children": [],
                                                "hasChildren": false,
                                                "name": "卷内目录",
                                                "id": "3a72f866a36b4dbfa0cb008e2eacf6ca",
                                                "type": 1,
                                                "nodeType": 1,
                                                "params": "{\"ZTID\":\"0\"}",
                                                "parentId": "1c2d5057742d4f23addd20095356e929",
                                                "order": 1,
                                                "status": "01"
                                            }
                                        ],
                                        "hasChildren": true,
                                        "name": "传统组卷",
                                        "id": "1c2d5057742d4f23addd20095356e929",
                                        "type": 1,
                                        "nodeType": 0,
                                        "params": "",
                                        "parentId": "26e2908a9a774c4ea72b1461223fa324",
                                        "order": 1,
                                        "status": "01"
                                    }
                                ],
                                "hasChildren": true,
                                "name": "基建档案",
                                "id": "26e2908a9a774c4ea72b1461223fa324",
                                "type": 1,
                                "nodeType": 0,
                                "params": "",
                                "parentId": "1",
                                "order": 2,
                                "status": "01"
                            },
                            {
                                "tbname": "",
                                "children": [],
                                "hasChildren": false,
                                "name": "专题库档案",
                                "id": "00debe2a20404c8cbb8d325de15a4332",
                                "type": 1,
                                "nodeType": 0,
                                "params": "",
                                "parentId": "1",
                                "order": 2,
                                "status": "01"
                            },
                            {
                                "tbname": "",
                                "children": [
                                    {
                                        "tbname": "xzdajh",
                                        "children": [
                                            {
                                                "tbname": "xzda",
                                                "children": [],
                                                "hasChildren": false,
                                                "name": "传统组卷",
                                                "id": "b7f6e19d28914317af56c1f950e5e8bb",
                                                "type": 1,
                                                "nodeType": 1,
                                                "params": "",
                                                "parentId": "5e8701e70ed743858e13cebc858f1a0b",
                                                "order": 1,
                                                "status": "01"
                                            }
                                        ],
                                        "hasChildren": true,
                                        "name": "简化整理",
                                        "id": "5e8701e70ed743858e13cebc858f1a0b",
                                        "type": 1,
                                        "nodeType": 1,
                                        "params": "",
                                        "parentId": "ae544d53797c4601800302391b7b38bc",
                                        "order": 1,
                                        "status": "01"
                                    },
                                    {
                                        "tbname": "xzda",
                                        "children": [],
                                        "hasChildren": false,
                                        "name": "传统组卷",
                                        "id": "5da7550398634659a7b944be56b6e6eb",
                                        "type": 1,
                                        "nodeType": 1,
                                        "params": "{\"ZTID\":\"1\"}",
                                        "parentId": "ae544d53797c4601800302391b7b38bc",
                                        "order": 1,
                                        "status": "01"
                                    }
                                ],
                                "hasChildren": true,
                                "name": "行政档案",
                                "id": "ae544d53797c4601800302391b7b38bc",
                                "type": 1,
                                "nodeType": 0,
                                "params": "",
                                "parentId": "1",
                                "order": 4,
                                "status": "01"
                            },
                            {
                                "tbname": "",
                                "children": [
                                    {
                                        "tbname": "",
                                        "children": [
                                            {
                                                "tbname": "sbda",
                                                "children": [],
                                                "hasChildren": false,
                                                "name": "案卷目录",
                                                "id": "c712b08de6054e28ad8fffec07560115",
                                                "type": 1,
                                                "nodeType": 1,
                                                "params": "{\"ZTID\":\"1\"}",
                                                "parentId": "520cd3c16b0b4fa9adad0d9e0d052aca",
                                                "order": 1,
                                                "status": "01"
                                            },
                                            {
                                                "tbname": "sbda",
                                                "children": [],
                                                "hasChildren": false,
                                                "name": "卷内目录",
                                                "id": "17ece1e009c5484b860fc91e86032cc1",
                                                "type": 1,
                                                "nodeType": 1,
                                                "params": "{\"ZTID\":\"0\"}",
                                                "parentId": "520cd3c16b0b4fa9adad0d9e0d052aca",
                                                "order": 2,
                                                "status": "01"
                                            }
                                        ],
                                        "hasChildren": true,
                                        "name": "传统组卷",
                                        "id": "520cd3c16b0b4fa9adad0d9e0d052aca",
                                        "type": 1,
                                        "nodeType": 0,
                                        "params": "",
                                        "parentId": "5f75e3e6dac749ebac1dcabbeb3086e7",
                                        "order": 1,
                                        "status": "01"
                                    }
                                ],
                                "hasChildren": true,
                                "name": "设备档案",
                                "id": "5f75e3e6dac749ebac1dcabbeb3086e7",
                                "type": 1,
                                "nodeType": 0,
                                "params": "",
                                "parentId": "1",
                                "order": 5,
                                "status": "01"
                            }
                        ],
                        "hasChildren": true,
                        "name": "南京艾档",
                        "id": "1",
                        "nodeType": 0,
                        "parentId": "0",
                        "order": 1,
                        "status": "01"
                    },
                    {
                        "tbname": "bksbyz",
                        "children": [
                            {
                                "tbname": "",
                                "children": [
                                    {
                                        "tbname": "bksbyz",
                                        "children": [
                                            {
                                                "children": [],
                                                "hasChildren": false,
                                                "name": "456",
                                                "id": "ff7161a71e5f439db770fa96a156f096",
                                                "type": 1,
                                                "nodeType": 0,
                                                "params": "",
                                                "archivesTableId": "658ea17b2a4a4c419860c1569ace01c6",
                                                "parentId": "22f6202574b24a6b9419344861b6de57",
                                                "order": 1,
                                                "status": "01"
                                            }
                                        ],
                                        "hasChildren": true,
                                        "name": "123",
                                        "id": "22f6202574b24a6b9419344861b6de57",
                                        "type": 1,
                                        "nodeType": 0,
                                        "params": "",
                                        "archivesTableId": "2442f887ce9342b08a4d5c86c43eaf9a",
                                        "parentId": "367b9d2559af4e2cbf72298a5257861c",
                                        "order": 1,
                                        "status": "01"
                                    }
                                ],
                                "hasChildren": true,
                                "name": "测试001",
                                "id": "367b9d2559af4e2cbf72298a5257861c",
                                "type": 1,
                                "nodeType": 0,
                                "params": "",
                                "parentId": "c0ba851287a247dc82d7a0e901734221",
                                "order": 1,
                                "status": "01"
                            },
                            {
                                "tbname": "bksbyz",
                                "children": [],
                                "hasChildren": false,
                                "name": "测试002",
                                "id": "1fcc2a4d075943a1baa5f24760158cf5",
                                "type": 1,
                                "nodeType": 0,
                                "params": "",
                                "archivesTableId": "2442f887ce9342b08a4d5c86c43eaf9a",
                                "parentId": "c0ba851287a247dc82d7a0e901734221",
                                "order": 1,
                                "status": "01"
                            },
                            {
                                "children": [],
                                "hasChildren": false,
                                "name": "123",
                                "id": "db009925e1f44d0c89c1dacea47961d5",
                                "type": 1,
                                "nodeType": 0,
                                "params": "",
                                "parentId": "c0ba851287a247dc82d7a0e901734221",
                                "order": 1,
                                "status": "01"
                            }
                        ],
                        "hasChildren": true,
                        "name": "万里测试",
                        "id": "c0ba851287a247dc82d7a0e901734221",
                        "type": 1,
                        "nodeType": 1,
                        "params": "",
                        "archivesTableId": "a10526fde6a24a309127751fea1dccd3",
                        "parentId": "0",
                        "order": 2,
                        "status": "01"
                    }
                ],
                "msg": "请求成功"
            }
        },
    },
]