<!--
 * @Author: 陈哲
 * @Date: 2022-06-21
 * @LastEditors: cz
 * @Description: 
-->
<!--  -->
<template>
    <div class="v-bind">
        <el-color-picker v-model="variable" show-alpha @active-change='handlerChangePrimary' /><br/>
        <a class="variable-color">这是效果文字</a>
    </div>
</template>

<script lang='ts'>
import { reactive, toRefs,ref } from 'vue';
export default {
    setup(){
        const variable = ref('red')
        const handlerChangePrimary = ()=>{

        }
        return {
            variable,
            handlerChangePrimary
        }
    }
}
</script>
<style scoped lang='scss'>
/* @import url(); 引入css类 */
.v-bind{
    .variable-color{
        color: v-bind(variable);
    }
}
</style>