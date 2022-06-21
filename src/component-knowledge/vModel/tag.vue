<!--
 * @Author: 陈哲
 * @Date: 2022-06-17
 * @LastEditors: cz
 * @Description: 
-->
<template>
    <div>{{$attrs.modelValue}}</div>
</template>

<script lang='ts'>
import { reactive, toRefs,onMounted } from 'vue';
export default {
    props:['value'],
    setup(props,{attrs,emit}){
        console.log(attrs.modelValue);
        
        const input = ()=>{
            // attrs.onUpdate(111111)
        }
        onMounted(()=>{
            emit('update:modelValue',999)
        })
        return {
            input
        }
    }
}
</script>
<style scoped lang='scss'>
/* @import url(); 引入css类 */

</style>