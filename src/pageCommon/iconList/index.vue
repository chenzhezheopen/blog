<!--
 * @Author: 陈哲
 * @Date: 2022-09-26
 * @LastEditors: cz
 * @Description: 
-->
<!--  -->
<template>
    <div class="common-icon-list">

    </div>
</template>

<script lang='ts' setup>
import { reactive, toRefs } from 'vue';
import dataApi from '@/api/modules/data'
const init = async ()=>{
    const params = new FormData()
    params.append('q','关注')
    params.append('sortType','updated_at')
    params.append('page','1')
    params.append('pageSize','54')
    params.append('fills','')
    params.append('t','1664185003850')
    params.append('ctoken','C5NNKA5Bh8PVDE6Hx-a7nGxI')
    console.log(params);
    
    let res = await dataApi.queryIconfontList(params)
    console.log(res);
    
}

init()

</script>
<style scoped lang='scss'>
/* @import url(); 引入css类 */

</style>