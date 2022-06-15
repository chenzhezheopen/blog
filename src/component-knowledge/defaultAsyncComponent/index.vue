<template>
  <div class="default-async-component">
    <img :src="imgUrl" alt="">
  </div>
</template>
<script lang='ts'>
export default {
  props:{
    imgUrl:{
      type:String,
      default:()=>''
    }
  }
}
</script>
<style scoped lang='scss'>
    .default-async-component{
        
    }
</style>
