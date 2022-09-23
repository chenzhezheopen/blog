<!--
 * @Author: 陈哲
 * @Date: 2022-08-17
 * @LastEditors: cz
 * @Description: 
-->
<!--  -->
<template>
    <div class="keepAlive">
        <el-tabs
            v-model="activeName"
             type="border-card"
            class="demo-tabs"
            @tab-click="handleClick"
        >
            <el-tab-pane name="keppAlive1" label="页面1（缓存）"></el-tab-pane>
            <el-tab-pane name="keppAlive2" label="页面2（不缓存）"></el-tab-pane>
            <el-tab-pane name="keppAlive3" label="页面3（缓存）"></el-tab-pane>
            <el-tab-pane name="keppAlive4" label="页面4（不缓存）"></el-tab-pane>
        </el-tabs>
        <div class="keepAlive-main-wrapper">
            <keep-alive>
                <Component :is='activeName'></Component>
            </keep-alive>
        </div>
    </div>
</template>

<script lang='ts'>
import keppAlive1 from './a.vue'
import keppAlive2 from './b.vue'
import keppAlive3 from './c.vue'
import keppAlive4 from './d.vue'
import { reactive, toRefs } from 'vue';
export default {
    components:{
        keppAlive1,keppAlive2,keppAlive3,keppAlive4
    },
    setup(){
        const state = reactive({
            activeName:'keppAlive1'
        })
        return {
            ...toRefs(state)
        }
    }
}
</script>
<style scoped lang='scss'>
/* @import url(); 引入css类 */
::v-deep .el-tabs--border-card{
    .el-tabs__item{
    border-bottom: none !important;

    }
    
    >.el-tabs__content{
        padding: 0;
    }
}
.keepAlive{
    &-main-wrapper{
        height: 400px;
        overflow: scroll;
    }
}
</style>