import { get,post,baseURL } from '../index'


import Jhttp from '../Jhttp'
const http = new Jhttp({
  xsrfCookieName: 'ctoken',
    xsrfHeaderName: 'x-csrf-token',
    withCredentials: true,
})


export default {
  node: (param:any) => {
    return get(`${baseURL}/user/queryList`, param, {$loading: true})
  },
  ga: (param:any) => {
    return get(`${baseURL}/ga`, param)
  },
  querybaiduimageList: (searchName:string)=>{
    return get(`${baseURL}/user/querybaiduimageList`,{searchName:searchName})
  },
  queryIconfontList: (params)=>{
    document.cookie = "";
    return http.post(
      `/api/icon/search.json`,
      params,
      {
        headers:{
          'x-csrf-token': 'C5NNKA5Bh8PVDE6Hx-a7nGxI',
          'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
      }
    )
  }
}
