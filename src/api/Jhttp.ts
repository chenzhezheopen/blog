/**
 * Jhttp v0.1.0
 * 2020/09/28
 * http请求封装
 * 1. 导出get, post请求, 上传文件请求(todo)
 * 2. 请求头携带token
 * 3. 设置默认参数
 * 4. 取消请求 待测试
 * 5. 错误处理
 * 6. 是否显示加载中
 * 7. 失败重发
 * 8. 轮询, 取消轮询 -> 放到外部utils中
 */
import { voidFnType, interceptors, strategy, defaultOption, requestConfigType, responseConfigType} from '@/type'

import axios from 'axios/dist/axios'
import type {AxiosRequestConfig,AxiosInstance,AxiosResponse} from 'axios'
import {
  merge,
  isFunction,
  isUndefined
} from 'lodash'
import fullLoading from '../utils/fullLoading'
import {useUserStore} from '@/pinia/user'
import router from '@/router'
import {ElNotification} from 'element-plus'

/** 取消请求 */
const CancelToken = axios.CancelToken

const CT_TYPE = {
  applicationJson: 'application/json; charset=UTF-8',
  applicationForm: 'application/x-www-form-urlencoded; charset=UTF-8'
}

const voidFn = () => {}

const STD_CODE_MSG = {
  401: '用户信息过期，请重新登录',
  404: '请求路径未找到',
  500: '服务器异常',
  503: '服务不可用异常'
}

class CancelMap {
  map: Map<string, Array<voidFnType>>

  constructor () {
    this.map = new Map()
  }

  cancel (url: string) {
    const cancelTokens = this.map.get(url)
    try {
      cancelTokens && (cancelTokens as Array<voidFnType>).forEach((c:voidFnType) => c && c())
      return true
    } catch (err) {
      // console.log(err)
      return false
    }
  }

  set (url: string, cancelFn: voidFnType) {
    const list = this.map.get(url) || []
    list.push(cancelFn)
    return this.map.set(url, list)
  }
}

class Jhttp {
  getToken: ()=>string
  http: AxiosInstance
  interceptors: interceptors
  tokenProperty: string
  strategy: strategy
  defaultOption: defaultOption
  cancelMap

  constructor (opt: AxiosRequestConfig) {
    
    this.getToken = ()=>''
    const instance = this
    this.http= axios.create(opt)
    this.interceptors = {
      request: [],
      response: []
    }
    this.tokenProperty = 'token'
    // 状态码策略
    this.strategy = {
      403: () => {
        router.push('/login')
      },
      401: ()=>{
        const {clearUserInfo} = useUserStore()
        clearUserInfo()
        ElNotification({
          title: 'Error',
          message: 'token校验不通过',
          type: 'error',
        })
      }
    }
    this.defaultOption = {
      $type: 'json',
      $loading: false,
      $needToken: true,
      $retry: 0,
      $silent: false
    }
    this.cancelMap = new CancelMap()
    /**
     * 请求拦截
     */
    this.http.interceptors.request.use(
      (config:requestConfigType) => {
        // console.log(config, 'cfg')
        config.$loading && fullLoading.open(config)
        config.$needToken && this.setHeaderToken(config)

        // 实例取消方法 添加到取消列表中
        config.cancelToken = new CancelToken(function executor (c) {
          instance.cancelMap.set((config.url as string), () => {
            c()
            fullLoading.close(config)
          })
        })

        const userInterceptor = this.interceptors.request[0] || voidFn
        const userConfig = userInterceptor(config)
        return merge(config, userConfig)
      },
      error => {
        const userInterceptor = this.interceptors.request[0] || voidFn
        const userError = userInterceptor(error)
        return userError || Promise.reject(error)
      }
    )
    /**
     * 响应拦截
     */
    this.http.interceptors.response.use(
      (response:responseConfigType) => {
        console.log(response.config, 'res cfg')
        fullLoading.close(response.config)
        const data = response.data
        // 错误码处理
        this.codeStrategy(data.code, data.message, (response.config.$silent as boolean))
        // user action
        const userInterceptor = this.interceptors.response[0]
        if (userInterceptor) {
          const userResponseData = userInterceptor(response)
          if (isUndefined(userResponseData)) {
            console.warn('自定义响应拦截器未设置返回值, 或返回值为undefined')
          }
          return userInterceptor(response)
        }
        return data
      },
      error => {
        // console.log(error.config, 'err cfg')
        if (error.response) {
          this.codeStrategy(error.response.status, error.response.data.message, error.config.$silent)
        } else {
          // jkMessage.error('网络异常, 请检查网络链接')
          // jkNotice.error({ title: '网络异常', desc: '请检查网络链接' })
        }
        fullLoading.close(error?.config)
        // 若发生异常, 则返回一个空对象
        return Promise.reject(error)
        // return {}
      }
    )
  }

  get (url: string, params: any, config: defaultOption = {}):any {
    const option = merge({}, this.defaultOption, config)
    return this.http.get(url, {
      params,
      ...option
    })
      .catch(err => {
        console.log(err.message, ', retry ' + config.$retry)
        if (config.$retry) {
          config.$retry--
          this.get(url, params, config)
        }
        return {}
      })
  }

  post (url: string, body: any, config: defaultOption = {}) {
    const option = merge({}, this.defaultOption, config)
    console.log(config.headers);
    
    return this.http({
      method: 'post',
      url,
      data: option.$type === 'json' ? body : JSON.stringify(body),
      headers: {
        'Content-Type': option.$type === 'json' ? CT_TYPE.applicationJson : CT_TYPE.applicationForm,
        ...(config.headers?config.headers:{})
      },
      ...option,
    })
      .catch(err => {
        console.log(err.message, ', retry ' + config.$retry)
        if (config.$retry) {
          config.$retry--
          this.post(url, body, config)
        }
        return {}
      })
  }

  upload (url: string, body: any) {}

  codeStrategy (code: 403, message: string, silent: boolean) {
    const strategy = this.strategy
    const fn = strategy[code]
    const isSilent = fn && fn()
    // if (!isSilent && code !== 200 && !silent) {
      // jkMessage.error(message || STD_CODE_MSG[code] || '网络异常')
      // jkNotice.error({ title: '错误', desc: message || STD_CODE_MSG[code] })
    // }
  }

  // setReqInterceptor (successHandler, errorHandler) {
  //   if (successHandler && !isFunction(successHandler)) {
  //     throw new TypeError('successHandler is not a function')
  //   }
  //   if (errorHandler && !isFunction(errorHandler)) {
  //     throw new TypeError('errorHandler is not a function')
  //   }
  //   this.interceptors.request.push(successHandler || voidFn, errorHandler || voidFn)
  // }

  // setResInterceptor (successHandler, errorHandler) {
  //   if (successHandler && !isFunction(successHandler)) {
  //     throw new TypeError('successHandler is not a function')
  //   }
  //   if (errorHandler && !isFunction(errorHandler)) {
  //     throw new TypeError('errorHandler is not a function')
  //   }
  //   this.interceptors.response.push(successHandler || voidFn, errorHandler || voidFn)
  // }

  setHeaderToken (config: requestConfigType) {
    const token = this.getToken()
    console.log('token==>',token);
    
    if (token) {
      config.headers![this.tokenProperty] = token
    }
    return config
  }

  // 等待被实现
  // getToken () {
  //   throw new Error('请指定`getToken`方法, 返回值为token')
  //   // return localStorage.get('DSMCommonToken')
  // }
}

export default Jhttp
