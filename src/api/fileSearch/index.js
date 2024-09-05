import { ElMessage } from 'element-plus'
import { get } from '@/utils/axios'

// 显示字段
export async function getListAll(data) {
  try {
    const response = await get({}, '/fields/listAll', data)
    if (response.status !== 200)
      ElMessage.error(response.msg || response.Msg)
    return response.data
  }
  catch (error) {
    ElMessage.error(error.message)
  }
}
