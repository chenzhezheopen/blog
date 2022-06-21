<template>
    <div class="module-wrapper">
        <div class="box" v-for="item in data" :key="item.title" :style="{
            'marginRight':Math.random()*160+'px',
            'marginTop':Math.random()*60+'px',
        }">
            <slot name="item" :item='item'>
            </slot>
        </div>
    </div>
</template>
<script lang='ts'>
export default {
    props:{
        data:{
            type:Array,
            default:[]
        }
    }
}
</script>
<style scoped lang='scss'>
.module-wrapper{
    display: flex;
    flex-wrap: wrap;
    width: 1200px;
    margin: 50px auto;
    .box{
        margin: 10px 10px 0 0;
        cursor: pointer;
    }
}
</style>

