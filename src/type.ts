/*
 * @Author: 陈哲
 * @Date: 2022-09-19
 * @LastEditors: cz
 * @Description: 类型文件
 */
import { App } from 'vue'
import type {AxiosRequestConfig,AxiosInstance,AxiosResponse} from 'axios'


export type appType = App<Element>

//工具类型
export type voidFnType = ()=>void;
export type travers<T> = {
  readonly [K in keyof T] : T[K]
}

//axios
export type statusCode = {
  403:voidFnType
}
//数据类型
export interface interceptors{
  request: Array<(T:requestConfigType)=>Promise<any>>,
  response: Array<(T:requestConfigType)=>Promise<any>>
}

export type strategy = travers<statusCode>

export type defaultOption = {
  $type?: string, // 传参格式默认json 如果传递form 随便填
  $loading?: boolean, // 是否显示加载动画
  $needToken?: boolean, // 是否携带token
  $retry?: number, // 重试次数
  $silent?: boolean // 无全局提示 true:不提示  false:提示
}

export type requestConfigType = AxiosRequestConfig & defaultOption;
export type responseConfigType = AxiosResponse & {
  config:defaultOption
};