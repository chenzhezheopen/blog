<template>
  <div class="default-async-component">
    <!-- <img :src="imgUrl" alt=""> -->
    <div>注意看资源加载</div>
    <template v-for="(data, index) in list" :key="index">
      <async-template :url="data.url"></async-template>
    </template>
  </div>
</template>
<script lang="ts">
  import { defineAsyncComponent } from "vue";

  const AsyncTemplate = defineAsyncComponent(async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return import("./asyncTemplate.vue");
  });
  export default {
    components: {
      AsyncTemplate,
    },
    setup() {
      return {
        list: [
          {
            url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1114%2F0G020114924%2F200G0114924-15-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1657955504&t=210bba92b64777d0452035e59844f4b7",
          },
          {
            url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2Ftp09%2F210F2130512J47-0-lp.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1657955636&t=5f85458031434aeb4e9170ed3e2f6eed",
          },
          {
            url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1114%2F0G020114924%2F200G0114924-1-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1657955636&t=92c704db27fbdac6d5971b7f3c5f4db7",
          },
          {
            url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.jj20.com%2Fup%2Fallimg%2F1114%2F0I120152936%2F200I1152936-5-1200.jpg&refer=http%3A%2F%2Fpic.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1657955636&t=e717c6ab0e48c6d11bac313874baecb0",
          },
        ],
      };
    },
  };
</script>
<style scoped lang="scss">
  .default-async-component {
  }
</style>
