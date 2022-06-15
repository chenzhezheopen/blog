//common
import PageCommon from '@/pageCommon/index.vue'
import Home from '@/pageCommon/home/index.vue'
import Record from '@/pageCommon/record/index.vue'

import Knowledge from '@/pageCommon/knowledge/index.vue'
import Vue from '@/pageCommon/knowledge/vue/index.vue'
import Vue3 from '@/pageCommon/knowledge/vue/vue3/index.vue'

import { RouteLocationNormalized } from "vue-router";


import { useAppStore } from '@/pinia/app'
import { storeToRefs } from 'pinia'


export default {
  path: "page-common",
  name: "PageCommon",
  component: PageCommon,
  redirect: '/page-common/home',
  children: [{
    path: "home",
    name: "Home",
    component: Home,
    meta: {
      title: '首页',
      index: '1',
      url:'/page-common/home'
    }
  }, {
    path: "record",
    name: "Record",
    component: Record,
    meta: {
      title: '工程日志',
      index:'2',
      url:'/page-common/record'
    }
  }, {
    path: 'knowledge',
    name: 'Knowledge',
    component: Knowledge,
    meta: {
      title: '知识库',
      index:'3',
      url:'/page-common/knowledge'
    },
    children: [{
      path: 'vue',
      name: 'Vue',
      component: Vue,
      meta: {
        title: 'vue',
        index:'3-1',
        url:'/page-common/knowledge/vue'
      },
      children: [{
        path: 'vue3',
        name: 'Vue3',
        component: Vue3,
        meta: {
          title: 'vue3',
          index:'3-1-1',
          url:'/page-common/knowledge/vue/vue3'
        },
      }]
    }]
  }],
  beforeEnter: (to: RouteLocationNormalized) => {
    const { pageTitle } = storeToRefs(useAppStore())
    pageTitle.value = '网站'
  }
}