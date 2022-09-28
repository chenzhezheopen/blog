<!--
 * @Author: 陈哲
 * @Date: 2022-09-19
 * @LastEditors: cz
 * @Description: 
-->

<template>
    <div class="almighty-catalog">

        <div class="history-menu">
            <div class="history-box tabWrapper" v-for="(item,index) in historyList" :key="index">
                <svg class="icon svg-icon" aria-hidden="true">
                    <use :xlink:href="'#'+item.svgName"></use>
                </svg>
                <label>{{item.label}}</label>
            </div>
        </div>
        <slot name="user"></slot>
        <slot name=teleport></slot>

        <div class="almighty-catalog-list">
            <template v-for="(item,index) in list" :key="index" >
                <div class="almighty-catalog-box tabWrapper" v-if="!item.filter||(item.filter&&item.filter())" @click="handler(item.click)">
                    <svg class="icon svg-icon" aria-hidden="true">
                        <use :xlink:href="'#'+item.svgName"></use>
                    </svg>
                    <label>{{item.label}}</label>
                </div>
            </template>
        </div>
    </div>
</template>

<script lang='ts'>
import { reactive, toRefs } from 'vue';
import { useRouter } from 'vue-router';
import { useAlmightyStore } from '@/pinia/almighty'
import { useUserStore } from '@/pinia/user'
import {storeToRefs} from 'pinia'
export default {
    setup(){
        const router = useRouter()
        const {open,close} =useAlmightyStore()
        const {token} = storeToRefs(useUserStore())

        const state = reactive({
            historyList:[],
            list:[{
                svgName:'icon-user',
                label:'个人中心',
                click: ()=>{
                    router.push('/page-common/user-mange')
                    close()
                },
                filter:()=>{
                    return token.value
                }
            },{
                svgName:'icon-home',
                label:'首页',
                click: ()=>{
                    router.push('/page-common/home')
                    close()
                }
            },{
                svgName:'icon-edit',
                label:'工程日志',
                url:'/page-common/record',
                click: ()=>{
                    router.push('/page-common/record')
                    close()
                }
            },{
                svgName:'icon-virus',
                label:'vue3',
                click: ()=>{
                    router.push('/page-common/knowledge/vue/vue3')
                    close()
                }
            },{
                svgName:'icon-sun',
                label:'vue',
                click: ()=>{
                    router.push('/page-common/knowledge/vue/common')
                    close()
                }
            },{
                svgName:'icon-image',
                label:'图片虚拟列表',
                click: ()=>{
                    router.push('/page-common/image-list')
                    close()
                }
            },{
                svgName:'icon-exit',
                label:'登陆',
                click: ()=>{
                    open('Login')
                },
                filter:()=>{
                    return !token.value
                }
            }]
        })

         const handler = (cb)=>{
            cb()
         }
        return {
            ...toRefs(state),
            handler,
            open,
            close
        }
    }
}
</script>
<style scoped lang='scss'>
/* @import url(); 引入css类 */
.almighty-catalog{
    width: 100%;
    .history-menu{
        display: flex;
        flex-direction: column;
        .history-list{
            display: flex;
        }
    }
    &-list{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
    }
    &-box{
        width: 25%;
        margin-top: 20px;
        
    }
    &-box:nth-child(-n + 4){
        margin-top: 0;
    }

    .tabWrapper{
        display: flex;
        flex-direction: column;
        align-items: center;
        cursor: pointer;
        svg{
            width: 40px;
            height: 40px;
        }
        label{
            font-size: 14px;
            color: var(--dark-color1);
            margin-top: 5px;
        cursor: pointer;
        }

    }
}
</style>