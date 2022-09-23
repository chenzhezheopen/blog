/*
 * @Author: 陈哲
 * @Date: 2022-09-16
 * @LastEditors: cz
 * @Description: 
 */

import { defineStore } from "pinia";

export const useUserStore = defineStore('user',{
    state: () => ({
        token:'chenzhezhe-token'
    }),
    actions: {
        queryToken(str:string) {
            console.log(str);
            
            this.token = str
        }
    },
    persist: {
         storage: window.sessionStorage,
     }
})