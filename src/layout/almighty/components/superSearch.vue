<!--
 * @Author: 陈哲
 * @Date: 2022-09-20
 * @LastEditors: cz
 * @Description: 
-->
<!--  -->
<template>
    <div class="almighty-superSearch">
        <el-input v-model="value" placeholder="输入搜索内容"></el-input>
    </div>
</template>

<script lang='ts'>
import { reactive, toRefs } from 'vue';
export default {
    setup(){
        const state = reactive({
            value:''
        })
        
        return {
            ...toRefs(state)
        }
    }
}
</script>
<style scoped lang='scss'>
/* @import url(); 引入css类 */

</style>