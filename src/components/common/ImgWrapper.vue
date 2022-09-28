<!--
 * @Author: 陈哲
 * @Date: 2022-09-27
 * @LastEditors: cz
 * @Description: 
-->
<!--  -->
<template>
    <div class="img-content" v-if="item.middleURL">
        <!-- <img :src="item.middleURL" alt=""> -->
        <!-- <el-image
          style="width: 100%; height: 160px"
          :src="item.middleURL"
          lazy
          :previewSrcList="preview"
          fit="contain"
        /> -->
        <img :src="item.middleURL" style="width: 100%; height: 160px;object-fit: contain;">
        <div class="operation-mask">
          <svg class="icon svg-icon svg1" aria-hidden="true" @click="previewImage(item.middleURL)">
            <use xlink:href="#icon-yunxiazai"></use>
          </svg>
          <svg class="icon svg-icon svg2" aria-hidden="true" @click="downloadFile(item.middleURL)">
            <use xlink:href="#icon-xiazai"></use>
          </svg>
          <svg class="icon svg-icon svg3" aria-hidden="true" @click="imageEdit(item.middleURL)">
            <use xlink:href="#icon-bianji"></use>
          </svg>
          <svg class="icon svg-icon svg3" aria-hidden="true" @click="addWish(item.middleURL)" v-if="!wishList.map(res=>res.img).includes(item.middleURL)">
            <use xlink:href="#icon-attent"></use>
          </svg>
        </div>
        <div class="img-name" v-html='item.fromPageTitle'></div>
      </div>
</template>

<script lang='ts'>
import { reactive, toRefs } from 'vue';
export default {
setup(){
}
}
</script>
<style scoped lang='scss'>
/* @import url(); 引入css类 */

</style>