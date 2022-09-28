/*
 * @Author: 陈哲
 * @Date: 2022-09-16
 * @LastEditors: cz
 * @Description: 
 */

import { defineStore } from "pinia";
import userApi from '@/api/modules/user'

interface userInfo{
    avatar:string,
    id?: number|null,
    account: string,
    name: string,
    sex: string,
    age?: number|null
}
interface wishArray{
    img:string
}

interface state{
    token:string,
    info:userInfo,
    wishList:array<wishArray>|null
}

function state():state{
    return {
        token:'',
        info:{
            id: null,
            account: '',
            name: '',
            sex: '',
            age: null,
            avatar:''
        },
        wishList:[]
    }
}


export const useUserStore = defineStore('user',{
    state:()=> state(),
    actions: {
        clearUserInfo(){
            this.token = ''
            Object.assign(this.info,state().info)
        },
        queryToken(str:string) {
            this.token = str
        },
        assignState(obj){
            console.log(obj);
            
            Object.assign(this,obj)
        },
        async queryWish (){
            let res:any = await userApi.queryWish()
            if(res.code === 200){
                this.wishList = res.data
            }
        }
    },
    persist: {
         storage: window.sessionStorage,
     }
})