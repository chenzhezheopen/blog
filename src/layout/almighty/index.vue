<!--
 * @Author: 陈哲
 * @Date: 2022-09-19
 * @LastEditors: cz
 * @Description: 
-->
<template>
  <div class="almighty">
    <div
      class="almighty-content almighty-allow"
      :class="['blog-almighty-content-' + defaultComponentName,styleName]"
      v-clickout="{ callback: close, allowClass: 'almighty-allow' }"
    >
      <!-- <div class="com-wrapper"> -->
      <div class="menu-btn" v-if="!['Default','Catalog'].includes(defaultComponentName)">
        <svg class="icon svg-icon" aria-hidden="true" @click="open('Catalog')">
          <use xlink:href="#icon-classify"></use>
        </svg>
      </div>

      <!-- 特色定制菜单 -->
      <div class="almighty-feature-teleport">

      </div>
      
      <component :is="dialogComponents[defaultComponentName]" class="almighty-modules" />
      <!-- </div> -->
    </div>
  </div>
</template>

<script lang="ts">
  import dialogComponents from "./dialogComponents";
  import { useAlmightyStore } from "@/pinia/almighty";
  import { storeToRefs } from "pinia";
  import { reactive, toRefs } from "vue";
  export default {
    setup() {
      const { defaultComponentName, styleName } = storeToRefs(useAlmightyStore());
      const { close, open } = useAlmightyStore();

      return {
        defaultComponentName,
        styleName,
        dialogComponents,
        close,
        open
      };
    },
  };
</script>
<style scoped lang="scss">
  /* @import url(); 引入css类 */
  .almighty {
    &-content {
      position: fixed;
      left: 50%;
      transform: translateX(-50%);
      z-index: 99;
      transition: 0.4s;
      overflow: hidden;
    }
    .menu-btn{
        text-align: center;
        svg{
            width: 30px;
            height: 30px;
            margin-bottom: 20px;
            cursor: pointer;
        }
    }
  }
</style>
