
import { get, post } from '@/utils/axios'
import { ElMessage } from 'element-plus';

// 通知公告
export async function getNotice(data) {
    try {
        let response = await get({}, '/fhsms/getNoticeList', data)
        if (response.status !== 200) ElMessage.error(response.message)
        return response.data
    } catch (error) {
        ElMessage.error(error.message)
    }
}

// 文件共享
export async function getShartFile(data) {
    try {
        let response = await get({}, '/share/getShareList', data)
        if (response.status !== 200) ElMessage.error(response.message)
        return response.data
    } catch (error) {
        ElMessage.error(error.message)
    }
}
