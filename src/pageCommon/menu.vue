<template>
  <el-sub-menu v-if="data.children" :index="data.meta.url">
      <template #title>{{data.meta.title}}</template>
      <template v-for="item in data.children" :key="item.path">
        <CommonMenu :data='item' v-if="item.hidden!=false"/>
      </template>
    </el-sub-menu>
  <el-menu-item v-else :index="data.meta.url">{{data.meta.title}}</el-menu-item>
</template>
<script lang='ts'>
export default {
    name:'CommonMenu',
    props:{
        data:{
            type:Object,
            default:()=>{}
        }
    }
}
</script>
<style scoped lang='scss'>
 
</style>
