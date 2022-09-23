<!--  -->
<template>
    <div class='parent'>
        <slot :Component='Child' name="prd">


        </slot>
    </div>
</template>

<script lang='ts'>
import { reactive, ref } from 'vue';
import child1 from './child.vue'
export default {
    setup(){
        console.log(child1);
        
        const ComponentName = ref('child')
        return {
            ComponentName,
            Child:`<div>123</div>`
        }
    }
}
</script>
<style scoped lang='scss'>
/* @import url(); 引入css类 */

</style>