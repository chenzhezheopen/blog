<!--
 * @Author: 陈哲
 * @Date: 2022-08-17
 * @LastEditors: cz
 * @Description: 
-->
<!--  -->
<template>
    <div class="nav">
        <el-tabs
            v-model="activeName"
            type="card"
            class="demo-tabs"
            @tab-click="handleClick"
        >
            <el-tab-pane label="1" name="first">User</el-tab-pane>
            <el-tab-pane label="2" name="second">Config</el-tab-pane>
            <el-tab-pane label="3" name="third">Role</el-tab-pane>
            <el-tab-pane label="4" name="fourth">Task</el-tab-pane>
        </el-tabs>
    </div>
</template>

<script lang='ts'>
import { reactive, toRefs } from 'vue';
export default {
    setup(){
        const state = reactive({
            activeName:'1'
        })
    }
}
</script>
<style scoped lang='scss'>
/* @import url(); 引入css类 */

</style>