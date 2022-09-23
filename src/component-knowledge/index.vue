<!--  -->
<template>
  <div class="knowledge-default_async_component">
    <div class="header" :class="{shadow:isShadow}">
      <!-- <span class="back" @click="back">回退</span> -->
      <el-button @click="back">回退</el-button>
    </div>
    <div class="knowledge-default_async_component-content">
      <Suspense>
        <template #default>
          <router-view></router-view>
        </template>
        <template #fallback>
          <p>Loading...</p>
        </template>
      </Suspense>
    </div>
  </div>
</template>

<script lang="ts">
  import { useAppStore } from "@/pinia/app";
  import { storeToRefs } from "pinia";
  import { useRouter } from "vue-router";
  import {ref,onUnmounted} from 'vue'
  export default {
    setup() {
      const { pageTitle } = storeToRefs(useAppStore());
      const router = useRouter();
      const isShadow = ref(false)


      //header 灰色阴影
      const listenerScroll = (e:any)=>{
        if(e?.path[1]?.scrollY>0){
          isShadow.value=true
        }else{
          isShadow.value=false
        }
      }
      window.addEventListener('scroll',listenerScroll)
      onUnmounted(()=>{
        window.removeEventListener('scroll',listenerScroll)
      })

      return {
        back: () => {
          router.back();
        },
        isShadow
      };
    },
  };
</script>
<style scoped lang="scss">
  /* @import url(); 引入css类 */
  .knowledge-default_async_component {
    // padding: ;
    .header {
      position: sticky;
      top: 0;
      height: 60px;
      width: 100%;
      left: 0;
      display: flex;
      align-items: center;
      padding: 0 5vw;
      
      box-sizing: border-box;
      background: #fff;
      .back {
        cursor: pointer;
      }
    }
    &-content{
      padding: 5vh 5vw;
      box-sizing: border-box;
    }
    .shadow{
box-shadow: 0 0 10px #000;
    }
  }
</style>
