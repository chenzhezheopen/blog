<!--
 * @Author: 陈哲
 * @Date: 2022-09-20
 * @LastEditors: cz
 * @Description: 
-->
<!--  -->
<template>
  <div class="common-image-list">
    <div class="common-image-list-wrapper">
      <div v-for="(item, index) in list" :key="index" class="img-content">
        <!-- <img :src="item.middleURL" alt=""> -->
        <el-image
          style="width: 260px; height: 160px"
          :src="item.middleURL"
          lazy
          :previewSrcList="preview"
          fit="contain"
        />
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
        </div>
        <div class="img-name">{{ item.fromPageTitle }}</div>
      </div>
    </div>
  </div>

  <!-- <el-dialog
    title="制作图片"
    v-model="imageEditVisable"
    width="1000"
    :before-close="dialogBeforeClose">
    <div>
      <ImageEdit/>
    </div>
    <template #footer>
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
    </template>
  </el-dialog> -->
  <div class="image-edit-wrapper-dialog" v-if="imageEditVisable">
    <teleport to='.almighty-content'>
      <div class="almighty-container" @click="back">
        <i class="icon iconfont icon-fanhui"></i>
        <label>返回</label>
      </div>
    </teleport>
    <ImageEdit :img='editImage'/>
  </div>

  <div class="preview-image-dialog" v-if="previewImageVisable">
    <el-image-viewer :url-list='preview' @close='previewImageClose' />
  </div>


</template>

<script lang="ts">
  import { reactive, toRefs } from "vue";
  import data from "@/api/modules/data";
  import {state} from './type'
  import {useAlmightyStore} from '@/pinia/almighty'
  import downloadFile from '@/utils/downloadFile'
  import ImageEdit from '@/components/toolComponents/ImageEdit.vue'


  export default {
    components:{ImageEdit},
    setup() {
      const state:state = reactive({
        list: [],
        preview: [],
        imageEditVisable:false,
        previewImageVisable:false,
        editImage:''
      });

      const {setStyleName} = useAlmightyStore() 


      const init = async () => {
        const res = await data.querybaiduimageList();
        const t:any[] = res.data || res.msg.data;
        let m:any[] = [];
        for (let i = 0; i < 20; i++) {
          m = [...m, ...t];
        }
        m.sort((a, b) => {
          return Math.random() > 0.5 ? -1 : 1;
        });
        state.list = m;
      };

      const imageEdit = (imageUrl)=>{
        state.imageEditVisable = true
        state.editImage = imageUrl
        setStyleName('almighty-image-edit')
      }

      const back = ()=>{
        state.imageEditVisable = false
        setStyleName('')
      }

      const previewImage = (imageUrl)=>{
        state.preview[0] = imageUrl
        state.previewImageVisable = true
      }
      const previewImageClose = ()=>{
        state.previewImageVisable = false
      }





      init();
      return {
        ...toRefs(state),
        downloadFile:downloadFile,
        imageEdit,
        back,
        previewImage,
        previewImageClose
      };
    },
  };
</script>
<style scoped lang="scss">
  /* @import url(); 引入css类 */
  @keyframes jumpMove{
    0%{
      transform: translateY(100px);
    }
    50%{
      transform: translateY(-50px);
    }
    100%{
      transform: translateY(0px);
    }
  }
  .common-image-list-wrapper {
    display: flex;
    flex-wrap: wrap;
    .img-content {
      margin: 10px;
      position: relative;
      padding-bottom: 20px;
      // img{
      //     width: 260px;
      //     height: 160px;
      //     object-fit: cover;
      //     border-radius: 10px;
      // }
      .operation-mask{
        position: absolute;
        overflow: hidden;
        left: 0;
        top: 0;
        width: 100%;
        height: 160px;
        transition: .4s;
        display: none;
        align-items: center;
        justify-content: center;
        background-size: 0px 0px;
        svg{
          margin-left: 20px;
          width: 40px;
          height: 40px;
          animation: jumpMove .4s forwards;
          cursor: pointer;
          transform: translateY(100px);
        }
        .svg1{
          animation-delay: 200ms;
        }
        .svg2{
          animation-delay: 300ms;
        }
        .svg3{
          animation-delay: 400ms;
        }
      }
      .img-name {
        position: absolute;
        width: 100%;
        bottom: 0;
        display: block;
        margin-top: 4px;
        margin-left: 8px;
        margin-right: 8px;
        font-family: MicrosoftYaHei;
        font-size: 13px;
        color: var(--vt-c-text-2);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
    .img-content:hover{
      .operation-mask{
        display: flex;
        background-image: radial-gradient(transparent 1px,var(--background-color) 1px);
        background-size: 4px 4px;
        backdrop-filter: saturate(50%) blur(4px);
      }
    }
  }
  .image-edit-wrapper-dialog{
    position: fixed;
    width: 100%;
    top: 0;
    height: 100vh;
    z-index: 97;
    background: rgba(0,0,0,.7);
  }
  .almighty-container{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    padding-left: 10px;
    cursor: pointer;
    .icon-fanhui{
      font-size: 20px;
      color: $PrimaryColor;
      margin-right: 10px;
    }
  }
  .preview-image-dialog{
    position: fixed;
    width: 100%;
    top: 0;
    height: 100vh;
    z-index: 97;
    background: rgba(0,0,0,.7);
  }
</style>
