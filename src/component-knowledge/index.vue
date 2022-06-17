<!--  -->
<template>
  <div class="knowledge-default_async_component">
    <div class="back"></div>
    <Suspense>
      <template #default>
        <router-view></router-view>
      </template>
      <template #fallback>
        <p>Loading...</p>
      </template>
    </Suspense>
  </div>
</template>

<script lang="ts">
  import { useAppStore } from "@/pinia/app";
  import { storeToRefs } from "pinia";
  export default {
    setup() {
      const { pageTitle } = storeToRefs(useAppStore());
    },
  };
</script>
<style scoped lang="scss">
  /* @import url(); 引入css类 */
  .knowledge-default_async_component {
    // padding: ;
  }
</style>
