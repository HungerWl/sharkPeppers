import { ElMessage } from 'element-plus'
import { get } from '@/utils/axios'

// 列表
export async function getListTree(data) {
  try {
    const response = await get({}, '/organizationManagement/getListTree', data)
    if (response.status !== 200)
      ElMessage.error(response.msg || response.Msg)
    return response.data
  }
  catch (error) {
    ElMessage.error(error.message)
  }
}
