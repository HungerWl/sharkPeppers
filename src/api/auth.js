import { get, post } from '@/utils/axios'
import { ElMessage } from 'element-plus';
// 登录
export function loginApi(data) {
  return post({}, '/admin/check', data)
}

// 系统背景及版本号
export async function systemInfo(data) {
  try {
    let response = await get({}, '/main/getLogoList', data)
    if (response.status !== 200) ElMessage.error(response.message)
    return response.data[0]
  } catch (error) {
    ElMessage.error(error.message)
  }
}

// 用户信息
export async function userInfoApi(data) {
  try {
    let response = await post({}, '/head/getInfo', data)
    return response
  } catch (error) {
    ElMessage.error(error.message)
  }
}

// 菜单
export async function menuListApi(data) {
  try {
    let response = await post({}, '/main/index', data)
    if (response.status !== 200) ElMessage.error(response.message)
    return response.data
  } catch (error) {
    ElMessage.error(error.message)
  }
}
