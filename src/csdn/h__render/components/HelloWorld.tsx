/*
 * @Author: 陈哲
 * @Date: 2022-04-22 17:22:40
 * @LastEditors: 陈哲
 * @LastEditTime: 2022-04-26 16:47:13
 * @Description: 
 */
import { log } from 'console';
import { VNode } from 'vue'

import { Btn } from './ToolComponents'

// const btn = new Btn('helloWorld setup')
const btn = new Btn()
// console.log(btn.setup());

export default function(context: any){
  return (<div> {context.msg}<btn/></div>)
}