import http from '../http'
import { UserInfo } from '@/entity/user'
/**
 * 登录函数
 *
 * @param username 用户名
 * @param password 密码
 * @returns 登录结果
 */
export const login = async (username: string, password: string) =>
  http.post<string>(
    '/user/login',
    {
      username,
      password,
    },
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
  )
/**
 * 获取用户详情
 * @returns
 */
export const getUserDetail = async (id?: number) =>
  http.get<UserInfo>('/user/detail', { id })
/**
 * 退出登录
 * @returns
 * */
export const logout = async () => http.post<string>('/user/logout')
