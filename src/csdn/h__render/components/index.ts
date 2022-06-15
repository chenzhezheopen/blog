/*
 * @Author: 陈哲
 * @Date: 2022-04-26 16:33:16
 * @LastEditors: 陈哲
 * @LastEditTime: 2022-04-26 17:27:59
 * @Description: 动态插入组件
 */

import { h, render } from 'vue'
//引入组件(这里是全局的公用组件依赖)
import childs from './collect'


export const addTool = (names: string | Array<string>, parentVNode: Element) => {
    const createVNode = CreateVNode.bind(this)
    console.log(names);
    
    if (typeof names === 'string') {
        createVNode(names,parentVNode)
    } else {
        names.forEach(res => {
            createVNode(res,parentVNode)
        })
    }
    
}



function CreateVNode(name:string,parentVNode: Element) {
    let container:Element = document.createElement('div')
    parentVNode?.appendChild(container)
    let alertVNode = h((childs as any)[name])
    render(alertVNode, container)
}