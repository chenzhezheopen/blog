<!--
 * @Author: 陈哲
 * @Date: 2022-09-20
 * @LastEditors: cz
 * @Description: 
-->
<!--  -->
<template>
    <div class="almighty-default" @click="backfast">

    </div>
</template>

<script lang='ts'>
import { reactive, toRefs } from 'vue';
import { useAlmightyStore } from '@/pinia/almighty';
export default {
    setup(){
        const {backfast} = useAlmightyStore()
        return {
            backfast
        }
    }
}
</script>
<style scoped lang='scss'>
/* @import url(); 引入css类 */
.almighty-default{
    width: 100%;
    height: 100%;
}
</style>