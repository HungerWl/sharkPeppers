import { ElMessage } from 'element-plus'
import { get } from '@/utils/axios'

// 通知公告
export async function getNotice(data) {
  try {
    const response = await get({}, '/fhsms/getNoticeList', data)
    if (response.status !== 200)
      ElMessage.error(response.message)
    return response.data
  }
  catch (error) {
    ElMessage.error(error.message)
  }
}

// 文件共享
export async function getShartFile(data) {
  try {
    const response = await get({}, '/share/getShareList', data)
    if (response.status !== 200)
      ElMessage.error(response.message)
    return response.data
  }
  catch (error) {
    ElMessage.error(error.message)
  }
}
