
import { get, post } from '@/utils/axios'
import { ElMessage } from 'element-plus';

// 菜单树
export async function getTreeList(data) {
    try {
        let response = await get({}, '/rolePermission/classTreeAuthorized', data)
        if (response.status !== 200) ElMessage.error(response.message)
        return response.data
    } catch (error) {
        ElMessage.error(error.message)
    }
}