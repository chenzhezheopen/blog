<!--
 * @Author: 陈哲
 * @Date: 2022-06-16
 * @LastEditors: cz
 * @Description: 
-->
<!--
 * @Author: 陈哲
 * @Date: 2022-06-16
 * @LastEditors: cz
 * @Description: 
-->

<!--  -->
<template>
  <div class="async-template" ref="myRef">
    <img :src="url" v-if="isVisible">
  </div>
</template>

<script lang="ts">
  import { reactive, ref } from "vue";
  import {useIntersectionObserver} from '@vueuse/core'
  export default {
    props: {
      url: {
        type: String,
        default: () => "",
      },
    },
    setup(){
      const myRef = ref(null)
      const isVisible = ref(false)
      const { stop } = useIntersectionObserver(
        myRef,
        ([{ isIntersecting }], observerElement) => {
          // targetIsVisible.value = isIntersecting
          console.log(isIntersecting);
          if(isIntersecting){
            isVisible.value = true
            stop()
          }
        }
      )
        return {
          myRef,
          isVisible
        }
    }
  };
</script>
<style scoped lang="scss">
  /* @import url(); 引入css类 */
  .async-template {
    min-height: 100vh;
    img{
        width: 100%;
    }
  }
</style>
