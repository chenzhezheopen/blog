/*
 * @Author: 陈哲
 * @Date: 2022-06-16
 * @LastEditors: cz
 * @Description: 
 */


import Knowledge from '@/component-knowledge/index.vue'
import DefaultAsyncComponen from '@/component-knowledge/defaultAsyncComponent/index.vue'
import UseInterSelectionObserver from '@/component-knowledge/useInterSelectionObserver/index.vue'

import { RouteLocationNormalized } from "vue-router";


import { useAppStore } from '@/pinia/app'
import { storeToRefs } from 'pinia'

import { defineAsyncComponent } from 'vue'

// const DefaultAsyncComponen = defineAsyncComponent(async () =>{
//   await new Promise(resolve => setTimeout(resolve, 1000))
//   return import('@/component-knowledge/defaultAsyncComponent/index.vue')
// })


export default {
  path: "page-knowledge",
  name: "PageKnowledge",
  component: Knowledge,
  redirect: '/page-knowledge/defaultAsyncComponen',
  children: [{
    path: "defaultAsyncComponent",
    name: "DefaultAsyncComponent",
    component: DefaultAsyncComponen,
    meta:{
      title: '异步加载组件',
    }
  },{
    path: "useInterSelectionObserver",
    name: "UseInterSelectionObserver",
    component: UseInterSelectionObserver,
    meta:{
      title: '视口区域加载',
    }
  }],
  beforeEnter: (to: RouteLocationNormalized) => {
    const { pageTitle } = storeToRefs(useAppStore())
    pageTitle.value = '知识库'
  }
}