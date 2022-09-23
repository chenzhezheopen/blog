import { get } from '../index'


export default {
  node: (param:any) => {
    return get(`/user/queryList`, param, {$loading: true})
  },
  ga: (param:any) => {
    return get(`/ga`, param)
  },
  querybaiduimageList: (searchName:string)=>{
    return get(`/user/querybaiduimageList`,{imageType:searchName})
  }
}
