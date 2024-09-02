
import { get, post } from '@/utils/axios'
import { ElMessage } from 'element-plus';

// 缩略图
export async function getPreviews(data) {
    try {
        let response = await post({}, 'sign/getPreviews', data)
        if (response.status !== 200) ElMessage.error(response.message)
        return response.data
    } catch (error) {
        ElMessage.error(error.message)
    }
}
