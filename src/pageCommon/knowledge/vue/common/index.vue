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
            data:[]
        }
    }
}
</script>
<style scoped lang='scss'>
 .vue3{
    width: 100%;
 }
</style>

