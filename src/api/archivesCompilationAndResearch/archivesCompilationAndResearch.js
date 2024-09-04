import { ElMessage } from 'element-plus'
import { post } from '@/utils/axios'

// 编研目录
export async function getBscList(data) {
  try {
    const response = await post({}, 'bsc/list', data)
    if (response.status !== 200)
      ElMessage.error(response.message)
    return response.data
  }
  catch (error) {
    ElMessage.error(error.message)
  }
}

// 电子文件
export async function getFiles(data) {
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
