/*
 * @Author: 陈哲
 * @Date: 2022-09-16
 * @LastEditors: cz
 * @Description: 
 */
import { get,baseURL,post } from '../index'

type loginParams = {
    account:string,
    password:string
}

export default {
  login: (param: loginParams):any => {
    return get(`${baseURL}/user/login`, param)
  },
  queryUserInfo: ():any => {
    return get(`${baseURL}/user/queryInfo`,{})
  },
  addWish: (img:string)=>{
    return post(`${baseURL}/user/add/wish/img`,{img})
  },
  queryWish:()=>{
    return post(`${baseURL}/user/query/wish/img`,{})
  }
}
