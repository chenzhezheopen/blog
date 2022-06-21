<!--
 * @Author: 陈哲
 * @Date: 2022-06-17
 * @LastEditors: cz
 * @Description: 
-->

<!--  -->
<template>
    <ssTag v-model="text" />
    -------
    {{text}}
    <input type="text" v-model="text" @input="$emit('update:modelValue',$event.target.value)" />
</template>

<script lang='ts'>
import { reactive, toRefs,ref } from 'vue';
import ssTag from './tag.vue'
export default {
    components:{ssTag},
    setup(){
        const state = reactive({
            text:111
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