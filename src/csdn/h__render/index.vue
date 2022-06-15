<!--
 * @Author: 陈哲
 * @Date: 2022-04-22 17:22:40
 * @LastEditors: 陈哲
 * @LastEditTime: 2022-04-26 17:18:11
 * @Description: 
-->
<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { btn } from "./components/ToolComponents";
//动态插入组件
import { addTool } from "./components/index";
const bodyVNode = document.body;
</script>
<template>
    <button @click="addTool(['btn','input'],bodyVNode)">添加btan</button>
    <btn />
</template>

<style lang="scss">
#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
}
</style>
