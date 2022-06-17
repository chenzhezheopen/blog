<template>
  <div class='vue3'>
    <div class="module-wrapper">
        <div class="box" v-for="item in data" :key="item.title" :style="{
            'marginRight':Math.random()*160+'px',
            'marginTop':Math.random()*60+'px',
        }">
            <el-tag @click="$router.push('/page-knowledge/'+item.path)">{{item.title}}</el-tag>
        </div>
    </div>
  </div>
</template>
<script lang='ts'>
export default {
    setup(){
        return{
            data:[{
                title:'异步组件加载',
                path:'defaultAsyncComponent'
            },{
                title:'视口区域加载',
                path:'useInterSelectionObserver'
            }]
        }
    }
}
</script>
<style scoped lang='scss'>
 .vue3{
    width: 100%;
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
 }
</style>

