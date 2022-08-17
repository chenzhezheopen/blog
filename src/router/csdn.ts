
import csdn from '@/csdn/index.vue'
import VBind from '@/csdn/v-bind/index.vue'
import H_Render from '@/csdn/h__render/index.vue'

import { RouteLocationNormalized} from "vue-router";


import { useAppStore } from '@/pinia/app'
import { storeToRefs } from 'pinia'

const todo = {
  title: 'Clean room',
  completed: false,
}

//   type Mapish = { [k: number]: boolean };
let p = typeof todo
let a1 = p
console.log(typeof p);
console.log(JSON.stringify(p));
console.log(a1);

export default{
    path: "csdn",
    name: "CSDN",
    component: csdn,
    redirect:'/csdn/v-bind',
    children: [{
      path: "v-bind",
      name: "vBind",
        component: VBind,
        meta: {
          title:'样式变量'
      }
    },{
      path: "h_render",
      name: "H_Render",
      component: H_Render,
      meta: {
        title:'动态插入组件'
    }
    }],
    beforeEnter: (to:RouteLocationNormalized) => {
        const { pageTitle} = storeToRefs(useAppStore())
        pageTitle.value = 'csdn'
    }
}