<!--
 * @Author: 陈哲
 * @Date: 2022-09-27
 * @LastEditors: cz
 * @Description: 
-->
<template>
    <div class="mange-wish-list">
        <div class="wish-list-wrapper">
            <el-image v-for="(item,index) in wishList" :key="index" fit="cover" :src="item.img" lazy />
        </div>  
    </div>
</template>

<script lang='ts' setup>
import { reactive, toRefs } from 'vue';
import {useUserStore} from '@/pinia/user'
import {storeToRefs} from 'pinia'

const {wishList} = storeToRefs(useUserStore())

</script>
<style scoped lang='scss'>
/* @import url(); 引入css类 */
.mange-wish-list{
    ::v-deep .wish-list-wrapper{
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        .el-image{
            width: 20%;
            height: 300px;
            padding: 10px;
            box-sizing: border-box;
            img{
            border-radius: 5px;

            }
        }
    }
}
</style>