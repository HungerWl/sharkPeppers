import { defineStore } from 'pinia'
import { ref, shallowRef } from 'vue'
import { ElMessage, ElNotification } from 'element-plus'
import { useRouteStore } from './route'
import router from '@/router'
import { loginApi } from '@/api/auth'
import { t } from '@/i18n'

const PREFIX = import.meta.env.VITE_APP_STORAGE_PREFIX

export const useUserStore = defineStore('user', () => {
  const token = ref()
  const userInfo = shallowRef()

  // 登录
  async function login(form) {
    const res = await loginApi(form)
    if (res.status === 200) {
      const { AUTH_TOKEN, msg, result } = JSON.parse(res.data)
      if (result !== 'success')
        return ElMessage.error(msg)

      token.value = AUTH_TOKEN
      ElNotification({
        title: t('app.loginSuccess'),
        message: `${t('app.welcome')}`,
        type: 'success',
      })
    }
  }

  // 登出
  async function logout(skip = false) {
    try {
      /* !skip && await logoutApi() */
    }
    finally {
      const routeStore = useRouteStore()
      token.value = ''
      userInfo.value = null
      sessionStorage.removeItem('WL_ADMIN_USER')
      await router.replace(`/login?replace=${router.currentRoute.value.path}`)
      routeStore.$reset()
    }
  }

  return { token, userInfo, login, logout }
}, {
  persist: {
    key: `${PREFIX}USER`,
    paths: ['token'],
    storage: sessionStorage,
  },
})
