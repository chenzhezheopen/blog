<!--
 * @Author: 陈哲
 * @Date: 2022-06-16
 * @LastEditors: cz
 * @Description: 
-->

<!--  -->
<template>
  <div class="async-template">
    <img :src="url" alt="">
  </div>
</template>

<script lang="ts">
  import { reactive, toRefs } from "vue";
  export default {
    props: {
      url: {
        type: String,
        default: () => "",
      },
    },
  };
</script>
<style scoped lang="scss">
  /* @import url(); 引入css类 */
  .async-template {
    img{
        width: 100%;
    }
  }
</style>
