import { ElMessage } from 'element-plus'
import { post } from '@/utils/axios'

// 档案目录
export async function getMenu(data) {
  try {
    const response = await post({}, 'rolePermission/classTreeAuthorized', data)
    if (response.status !== 200)
      ElMessage.error(response.Msg || response.msg)
    return response.data
  }
  catch (error) {
    ElMessage.error(error.message)
  }
}
// 表格数据
export async function getTable(data) {
  try {
    const response = await post({}, 'usercustom/customList', data)
    if (response.result !== 'success')
      ElMessage.error(response.Msg || response.msg)
    return response
  }
  catch (error) {
    ElMessage.error(error.message)
  }
}
