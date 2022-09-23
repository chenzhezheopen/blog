<!--
 * @Author: 陈哲
 * @Date: 2022-08-18
 * @LastEditors: cz
 * @Description: 
-->
<!--  -->
<template>
    <!-- <slot-parent v-slot='{Component}'>
        <component :is='Component'></component>
    </slot-parent> -->
    <SlotParent>
        <template #prd='{Component}'>
            {{Component}}
        </template>
    </SlotParent>
</template>

<script lang='ts'>
import SlotParent from './parent.vue'
import { reactive, toRefs } from 'vue';
export default {
    components:{SlotParent},
}
</script>
<style scoped lang='scss'>
/* @import url(); 引入css类 */

</style>