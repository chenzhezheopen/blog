
<!--
 * @Author: 陈哲
 * @Date: 2022-04-22 17:22:40
 * @LastEditors: 陈哲
 * @LastEditTime: 2022-04-26 17:18:11
 * @Description: 
-->
<script setup lang="ts">
const color = 'red'
</script>

<template>
    <a class="example-v__bind">文字颜色</a>
</template>

<style lang="scss">
.example-v__bind{
color: v-bind(color);
}
</style>
