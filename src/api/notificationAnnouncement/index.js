import { ElMessage } from 'element-plus'
import { get } from '@/utils/axios'

// 列表
export async function getNoticeList(data) {
  try {
    const response = await get({}, '/fhsms/getNoticeList', data)
    if (response.status !== 200)
      ElMessage.error(response.msg || response.Msg)
    return response.data
  }
  catch (error) {
    ElMessage.error(error.message)
  }
}
