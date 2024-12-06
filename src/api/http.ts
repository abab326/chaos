import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  Method,
} from 'axios'

import router from '@/router'
import pinia from '@/store'

export interface Result<T> {
  code: number
  data?: T
  message: string
}
class Http {
  instance: AxiosInstance
  constructor() {
    this.instance = axios.create({
      baseURL: import.meta.env.VITE_BASE_API_URL,
    })
    this.initInterceptors()
  }

  private initInterceptors() {
    this.instance.interceptors.request.use(
      (config) => {
        const token = pinia.state.value['store-user'].token
        if (token) {
          config.headers['Authorization'] = token
        }
        if (config.url?.includes('/login')) {
          config.headers['Authorization'] = ''
        }
        return config
      },
      (error) => Promise.reject(error)
    )
    this.instance.interceptors.response.use(
      (response: AxiosResponse<Result<any>>) => {
        console.log('interceptors response success', response)
        if (response.status !== 200) {
          return Promise.reject(response.data)
        } else if (response.data.code !== 200) {
          this.handleRequestError(response.data)
          return Promise.reject(response.data)
        }
        return response
      },
      (error) => {
        console.log('interceptors response error', error)
        const axiosError = error as AxiosError<Result<any>>
        let result: Result<any>
        if (axiosError.response?.data) {
          result = axiosError.response.data
        } else {
          result = {
            code: axiosError.status || 500,
            message: axiosError.message || '未知错误',
            data: null,
          } as Result<any>
        }
        this.handleRequestError(result)
        return Promise.reject(error)
      }
    )
  }

  private handleRequestError(data: Result<any>) {
    if (data.code === 401) {
      this.logFailedRequest()
    } else {
      ElMessage.error(data.message)
    }
  }

  private logFailedRequest() {
    ElMessageBox.confirm('登录失效，是否重新登录', '提示', {})
      .then((action) => {
        console.log('action', action)
        router.replace({ name: 'login' })
      })
      .catch(() => {})
      .finally()
  }

  private request<T>(
    url: string,
    method: Method | string,
    config?: AxiosRequestConfig
  ): Promise<[any, Result<T> | undefined]> {
    const defaultHeaders = {
      'Content-Type': 'application/json;charset=UTF-8',
    }

    return new Promise((resolve) => {
      this.instance
        .request<Result<T> | null>({
          url,
          method: method,
          ...config,
          headers: {
            ...defaultHeaders,
            ...config?.headers,
          },
        })
        .then(
          (res) => resolve([null, res.data as Result<T>]),
          (error) => {
            console.log('request error', error)
            resolve([error, undefined])
          }
        )
        .catch((error) => {
          console.log('request catch', error)
          resolve([error, undefined])
        })
    })
  }

  get<T>(
    url: string,
    params?: Record<string, any>,
    config?: AxiosRequestConfig
  ): Promise<[any, Result<T> | undefined]> {
    return this.request<T>(url, 'get', { params, ...config })
  }
  post<T>(
    url: string,
    data?: Record<string, any>,
    config?: AxiosRequestConfig
  ): Promise<[any, Result<T> | undefined]> {
    return this.request<T>(url, 'post', { data, ...config })
  }
}

export default new Http()
