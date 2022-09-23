/*
 * @Author: 陈哲
 * @Date: 2022-09-16
 * @LastEditors: cz
 * @Description: 
 */
import { ElLoading } from 'element-plus'
import {requestConfigType} from '@/api/Jhttp'

// 注意: apiConfig传入的是一个对象, 在请求前后的拦截中, 这是同一个对象. 全等===.

export default {
  state: new Set(),
  loading:{
    close:()=>{}
  },
  open (apiConfig:requestConfigType) {
    this.loading = ElLoading.service({
        lock: true,
        text: 'Loading',
        background: 'rgba(0, 0, 0, 0.7)',
      })
    this.state.add(apiConfig)
  },
  close (apiConfig:requestConfigType) {
    this.state.delete(apiConfig)
    if (!this.state.size) {
        this.loading!.close()
    }
  }
}
