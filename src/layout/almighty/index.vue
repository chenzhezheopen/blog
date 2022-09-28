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

      <component :is="dialogComponents[defaultComponentName]" class="almighty-modules">
        <!-- 头像展示 -->
        <template #user>
          <div class="user-container" v-if="token&&info.avatar">
            <el-avatar shape="square" :size="50" :src="info.avatar" />
          </div>
        </template>
        
          <!-- 特色定制菜单 -->
        <template #teleport>
          <div class="almighty-feature-teleport">
          </div>
        </template>
      </component>
      <!-- </div> -->
    </div>
  </div>
</template>

<script lang="ts" setup>
  import dialogComponents from "./dialogComponents";
  import { useAlmightyStore } from "@/pinia/almighty";
  import { useUserStore } from "@/pinia/user";
  import { storeToRefs } from "pinia";
  // import { reactive, toRefs } from "vue";
  
  const { defaultComponentName, styleName } = storeToRefs(useAlmightyStore());
  const { info,token } = storeToRefs(useUserStore());
  const { close, open } = useAlmightyStore();
  console.log(token);
  
    
</script>

<style scoped lang="scss">
  /* @import url(); 引入css类 */
  .user-container{
    width: 100%;
    display: flex;
    margin-bottom: 20px;
    flex-direction: column;
    align-items: center;
  }
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
