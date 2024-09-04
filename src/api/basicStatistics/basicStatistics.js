import { ElMessage } from 'element-plus'
import { post } from '@/utils/axios'

// 列表
export async function getList(data) {
  try {
    const response = await post({}, 'statisticsConfiguration/list', data)
    if (response.status !== 200)
      ElMessage.error(response.message)
    return response.data
  }
  catch (error) {
    ElMessage.error(error.message)
  }
}
// 表头
export async function getMainFields(data) {
  try {
    const response = await post({}, 'archivesData/getMainFields', data)
    if (response.status !== 200)
      ElMessage.error(response.message)
    return response.data
  }
  catch (error) {
    ElMessage.error(error.message)
  }
}
// options 数据
export async function getOptions(data) {
  try {
    const response = await post({}, 'statisticsConfiguration/executeStatistics', data)
    if (response.status !== 200)
      ElMessage.error(response.message)
    return response.data
  }
  catch (error) {
    ElMessage.error(error.message)
  }
}
// echarts 数据
export async function getEchartData(data) {
  try {
    const response = await post({}, 'statisticsConfiguration/executeStatistics', data)
    if (response.status !== 200)
      ElMessage.error(response.message)
    return response.data
  }
  catch (error) {
    ElMessage.error(error.message)
  }
}
