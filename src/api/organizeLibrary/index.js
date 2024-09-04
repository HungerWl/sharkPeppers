import { ElMessage } from 'element-plus'
import { get } from '@/utils/axios'

// 菜单树
export async function getTreeList(data) {
  try {
    const response = await get({}, '/rolePermission/classTreeAuthorized', data)
    if (response.status !== 200)
      ElMessage.error(response.message)
    return response.data
  }
  catch (error) {
    ElMessage.error(error.message)
  }
}
