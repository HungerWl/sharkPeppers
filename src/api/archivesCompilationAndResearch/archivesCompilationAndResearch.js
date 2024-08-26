
import { get, post } from '@/utils/axios'
import { ElMessage } from 'element-plus';

// 编研目录
export async function getBscList(data) {
    try {
        let response = await post({}, 'bsc/list', data)
        if (response.status !== 200) ElMessage.error(response.message)
        return response.data
    } catch (error) {
        ElMessage.error(error.message)
    }
}

// 电子文件
export async function getFiles(data) {
    try {
        let response = await post({}, 'bscDirFile/list', data)
        if (response.status !== 200) ElMessage.error(response.message)
        return response.data
    } catch (error) {
        ElMessage.error(error.message)
    }
}