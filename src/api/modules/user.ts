/*
 * @Author: 陈哲
 * @Date: 2022-09-16
 * @LastEditors: cz
 * @Description: 
 */
import { get } from '../index.js'

type loginParams = {
    account:string,
    password:string
}

export default {
  login: (param: loginParams):any => {
    return get(`/user/login`, param)
  }
}
