/*
 * @Author: 陈哲
 * @Date: 2022-09-15
 * @LastEditors: cz
 * @Description: 
 */
import Jhttp from './Jhttp'
import { useUserStore } from '@/pinia/user'
import { storeToRefs } from 'pinia'

const http = new Jhttp({})
export const baseURL = '/blogBoot'

http.tokenProperty = 'Authorizations' // 默认为token

// 根据项目订制
http.getToken = () => {
  const { token } = useUserStore()
  return token
}

// 根据项目订制
// http.strategy = {
  // ...http.strategy,
  // 998: () => {
  // router.push('/create-user') // 用户不存在
  // 状态码 998的处理
  // }
  // 999: () => {
  //   // 业务逻辑异常
  // }
// }

export default http
export const get = http.get.bind(http)
export const post = http.post.bind(http)
export const upload = http.upload
