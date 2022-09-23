<!--
 * @Author: 陈哲
 * @Date: 2022-08-17
 * @LastEditors: cz
 * @Description: 
-->
<!--  -->
<template>
    <div class="center-con flex-center">
        <el-input v-model="value"></el-input>
    </div>
</template>

<script lang='ts'>
import { ref, toRefs } from 'vue';
export default {
setup(){
    const value = ref(null)
    return {
        value
    }
}
}
</script>
<style scoped lang='scss'>
/* @import url(); 引入css类 */
.center-con{
    height: 2000px;
}
</style>