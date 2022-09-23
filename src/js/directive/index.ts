/*
 * @Author: 陈哲
 * @Date: 2022-09-19
 * @LastEditors: cz
 * @Description: 
 */
import { appType } from '@/type'
import dialogDrag from './dialogDrag'
import clickOut from './clickOut'
export default (App: appType) => {
    dialogDrag(App)
    clickOut(App)
}