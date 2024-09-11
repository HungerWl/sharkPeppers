import { ElMessage } from 'element-plus'
import { get, post } from '@/utils/axios'

/**
 * 获取 BSC 模块树列表
 * @param {} - 空对象
 */
export async function getModuleTreeList(data) {
  try {
    const response = await post({}, 'bsc/moduleTreeList', data)
    if (response.status !== 200)
      ElMessage.error(response.message)
    return response.data
  }
  catch (error) {
    ElMessage.error(error.message)
  }
}

// 电子文件
export async function getFilesTable(data) {
  try {
    const response = await post({}, 'bscDirFile/list', data)
    if (response.status !== 200)
      ElMessage.error(response.message)
    return response.data
  }
  catch (error) {
    ElMessage.error(error.message)
  }
}

// 获取文件流
export async function getFile(data, type) {
  try {
    const response = await get({}, 'bsc/getFile', data, type)
    return response
  }
  catch (error) {
    ElMessage.error(error.message)
  }
}
