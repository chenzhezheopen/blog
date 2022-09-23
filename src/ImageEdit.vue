<!--
 * @Author: 陈哲
 * @Date: 2022-09-22
 * @LastEditors: cz
 * @Description: 
-->
<template>
  <div style="height: 100%">
    <div id="tui-image-editor"></div>
  </div>
</template>

<script setup lang='ts'>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import "tui-image-editor/dist/tui-image-editor.css";
import { onMounted,defineProps,toRefs } from "vue";
import ImageEditor from "tui-image-editor/dist/tui-image-editor";

// const FileSaver = require("file-saver"); //to download edited image to local. Use after npm install file-saver
// const blackTheme = require("./js/theme/black-theme.js");
const locale_ru_RU = {
  // override default English locale to your custom
  Crop: "Обзрезать",
  "Delete-all": "Удалить всё",
  // etc...
};

const props = defineProps({
  img: String
}) 

const { img } = toRefs(props);


onMounted(() => {
  const instance = new ImageEditor(
    document.querySelector("#tui-image-editor"),
    {
      includeUI: {
        loadImage: {
          path: img?.value,
          name: "SampleImage",
        },
        locale: locale_ru_RU,
        // theme: blackTheme, // or whiteTheme
        initMenu: "filter",
        menuBarPosition: "bottom",
      },
      cssMaxWidth: 700,
      cssMaxHeight: 500,
      selectionStyle: {
        cornerSize: 20,
        rotatingPointOffset: 70,
      },
    }
  );
});
</script>

<style scoped>
  .drawing-container {
    height: 900px;
  }
</style>
