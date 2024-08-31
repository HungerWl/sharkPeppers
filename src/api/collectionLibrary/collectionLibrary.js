import { get, post } from '@/utils/axios'
import { ElMessage } from 'element-plus';

// 档案目录
export async function getMenu(data) {
    try {
        let response = await post({}, 'rolePermission/classTreeAuthorized', data)
        if (response.status !== 200) ElMessage.error(response.Msg || response.msg)
        return response.data
    } catch (error) {
        ElMessage.error(error.message)
    }
}