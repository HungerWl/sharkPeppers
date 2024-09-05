import { ElMessage } from 'element-plus'
import { post } from '@/utils/axios'

// 获取按钮列表
export async function getListTree(data) {
  try {
    const response = await post({}, '/fhbutton/listTree', data)
    if (response.status !== 200)
      ElMessage.error(response.msg || response.Msg)
    return response.data
  }
  catch (error) {
    ElMessage.error(error.message)
  }
}
