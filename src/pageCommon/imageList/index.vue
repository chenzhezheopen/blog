<!--
 * @Author: 陈哲
 * @Date: 2022-09-20
 * @LastEditors: cz
 * @Description: 
-->
<template>
  <div class="common-image-list" ref="contentRef">
    <div class="common-image-list-wrapper" :style="{
    height:containerHeight+'px',
  }">
  <div class="position-move-content" :style="{transform:`translateY(${scrollPosition}px)`}">
    <template v-for="(item, index) in validList" :key="index">
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
  <teleport to='.almighty-feature-teleport' v-if="defaultComponentName==='Catalog'">
    <div class="search-wrapper">
      <el-input v-model="searchName" placeholder="请输入要搜索的图片(内容来自百度)">
        <template #append>
          <el-button @click="handlerSearch" type="primary">搜索</el-button>
        </template>
      </el-input>
    </div>
  </teleport>
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
  import { reactive, toRefs, watch, ref, onMounted } from 'vue';
  import data from "@/api/modules/data";
  import userApi from '@/api/modules/user'
  import {state} from './type'
  import {useAlmightyStore} from '@/pinia/almighty'
  import { useUserStore } from '@/pinia/user';
  import { storeToRefs } from "pinia";
  import downloadFile from '@/utils/downloadFile'
  import ImageEdit from '@/components/toolComponents/ImageEdit.vue'
  import { ElMessage } from 'element-plus';


  export default {
    components:{ImageEdit},
    setup() {
      const state:state = reactive({
        list: [],
        validList:[],
        preview: [],
        imageEditVisable:false,
        previewImageVisable:false,
        editImage:'',
        containerHeight:0,
        scrollPosition:0,
        searchName:''
      });

      const contentRef = ref<null | HTMLElement>(null)
      const { defaultComponentName } = storeToRefs(useAlmightyStore());
      const {setStyleName,open,close} = useAlmightyStore() 
      const {wishList} = storeToRefs(useUserStore())
      const {assignState} = useUserStore()


      const init = async (searchName = '壁纸') => {
        const res = await data.querybaiduimageList(searchName);
        const t:any[] = res.data || res.msg.data;
        let m:any[] = [];
        for (let i = 0; i < 100; i++) {
          m = [...m, ...t];
        }
        // m.sort((a, b) => {
        //   return Math.random() > 0.5 ? -1 : 1;
        // });
        state.list = m;
        state.validList = state.list.slice(0,20)

        if(contentRef.value){
          contentRef.value.scrollTop=0;
        }
      };

      watch(()=>state.list,()=>{
        state.containerHeight = (state.list.length/5)*195
      })

      onMounted(()=>{
        console.log(contentRef.value);
        console.log(document.getElementsByClassName('common-image-list'));
        
        // contentRef.value
        contentRef.value?.addEventListener('scroll',countHeight)
      })
      const countHeight = ()=>{
        if(Math.abs(contentRef.value!.scrollTop-state.scrollPosition)>=195){

          state.scrollPosition = contentRef.value!.scrollTop

          const c = Math.floor(state.scrollPosition/195)
          console.log(c);
          
          const num = c*5
          state.validList = state.list.slice(num,num+30)

        }else{

          if(state.scrollPosition - contentRef.value!.scrollTop > 0){
            state.scrollPosition = (Math.floor(contentRef.value!.scrollTop/195))*195
            const c = Math.floor(state.scrollPosition/195)
            const num = c*5
            state.validList = state.list.slice(num,num+30)
          }
        }
      }


      

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

      const handlerSearch = ()=>{
        init(state.searchName)
        close()
      }


      //添加图片
      const addWish =async (img)=>{
        console.log(img);
        
        let res:any = await userApi.addWish(img)
        if(res.code === 200){
          assignState({wishList:[...wishList.value,{img}]})
          ElMessage.success(res.msg)

        }else{
          ElMessage.error(res.msg)
        }
      }

      




      init();
      return {
        ...toRefs(state),
        downloadFile:downloadFile,
        imageEdit,
        back,
        previewImage,
        previewImageClose,
        countHeight,
        handlerSearch,
        close,
        contentRef,
        defaultComponentName,
        addWish,
        wishList
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
  .common-image-list{
    height: 100vh;
    overflow: scroll;
    margin-top: -56px;
  }
  .common-image-list-wrapper {
    margin-top: 56px;
    .position-move-content{
      display: flex;
      flex-wrap: wrap;
      width: 100%;
    }
    .img-content {
      padding: 10px;
      position: relative;
      padding-bottom: 20px;
      width: 20%;
      box-sizing: border-box;
      // img{
      //     width: 260px;
      //     height: 160px;
      //     object-fit: cover;
      //     border-radius: 10px;
      // }
      .operation-mask{
        position: absolute;
        overflow: hidden;
        left: 0px;
        top: 10px;
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
        width: calc(100% - 20px);
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
        background: rgba(255,255,255,.5);
        // background-image: radial-gradient(transparent 1px,var(--background-color) 1px);
        // background-size: 4px 4px;
        // backdrop-filter: saturate(50%) blur(4px);
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
  .search-wrapper{
    margin-bottom: 20px;
  }
</style>
