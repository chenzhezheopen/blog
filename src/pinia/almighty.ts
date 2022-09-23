/*
 * @Author: 陈哲
 * @Date: 2022-09-19
 * @LastEditors: cz
 * @Description: 
 */

import { defineStore } from "pinia";
type item = {
    name:string,
    data:any
}
type historyInfo = Array<item>

type state = {
    styleName:string,
    defaultComponentName:string,
    historyInfo:historyInfo
}

const originalData = ():state=>({
    styleName:'',
    defaultComponentName: 'Default',
    historyInfo:[]
})

export const useAlmightyStore = defineStore('almighty',{
    state: () => (originalData()),
    actions: {
        reset() {
            Object.assign(this, originalData())
        },
        close() {
            this.defaultComponentName = 'Default'
        },
        open(comName: string) {
            this.defaultComponentName = comName
            this.historyInfo.push({
                name: comName,
                data:{}
            })
        },
        backfast(){
            this.defaultComponentName = this.historyInfo[this.historyInfo.length-1]?.name || 'Catalog'
        },
        setStyleName(styleName){
            this.styleName = styleName
        }
    }
})