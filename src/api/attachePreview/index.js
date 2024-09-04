import { ElMessage } from 'element-plus'
import { post } from '@/utils/axios'

// 缩略图
export async function getPreviews(data) {
  try {
    const response = await post({}, 'sign/getPreviews', data)
    if (response.status !== 200)
      ElMessage.error(response.message)
    return response.data
  }
  catch (error) {
    ElMessage.error(error.message)
  }
}
