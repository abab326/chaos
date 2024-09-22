import { useThrottleFn } from '@vueuse/core'
import { login, getUserDetail, logout } from '@/api/modules/user'
import { UserInfo } from '@/entity/user'

export const useUserStore = defineStore(
  'store-user',
  () => {
    const token = ref<string>()
    const _user = ref<UserInfo>()

    const user = computed(() => _user.value)
    const isLogin = computed(() => !!token.value)

    watch(token, (val) => {
      if (val && !_user.value) {
        getUserInfo()
      }
    })

    const userLogin = async (username: string, password: string) => {
      const [error, res] = await login(username, password)
      if (!error && res?.data) {
        _user.value = undefined
        token.value = res!.data
        localStorage.setItem('token', token.value)
        return true
      }
      return false
    }

    const getUserInfo = useThrottleFn(async () => {
      const [error, res] = await getUserDetail()
      if (!error && res) {
        _user.value = res!.data as UserInfo
      }
    }, 1000)

    /**
     * 用户登出
     *
     * @returns 无返回值
     */
    const userLogout = async () => {
      const [error] = await logout()
      console.log('error', error)
      if (!error) {
        token.value = undefined
        _user.value = undefined
        localStorage.removeItem('token')
        return true
      }
    }

    return { token, _user, user, isLogin, userLogin, getUserInfo, userLogout }
  },
  {
    persist: {
      pick: ['token', '_user'],
      storage: localStorage,
    },
  }
)
