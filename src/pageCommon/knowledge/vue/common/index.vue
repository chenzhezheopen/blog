<template>
  <div class='vue3'>
    <RandomModule :data="data">
        <template #item='{item}'>
            <el-tag @click="$router.push('/page-knowledge/'+item.path)">{{item.title}}</el-tag>
        </template>
    </RandomModule>
  </div>
</template>
<script lang='ts'>
import RandomModule from '@/components/commonLayout/randomModule.vue'
export default {
    components:{RandomModule},
    setup(){
        return{
            data:[{
                title:'keepAlive',
                path:'keep-alive'
            },{
                title:'插槽返回组件',
                path:'slot-component'
            },{
                title:'vue-property-decorator插件',
                path:'vue-property-decorator'
            }]
        }
    }
}
</script>
<style scoped lang='scss'>
 .vue3{
    width: 100%;
 }
</style>

