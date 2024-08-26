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
]
