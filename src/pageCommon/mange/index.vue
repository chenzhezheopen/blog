<!--
 * @Author: 陈哲
 * @Date: 2022-09-26
 * @LastEditors: cz
 * @Description: 
-->
<!--  -->
<template>
    
    <div class="common-mange">
        <teleport to=".header-wrapper" v-if="isShow">
            <div class="user-info">
                <div class="avatar">
                        <img src="@/assets/image/avatar-decorate.png"  class="avatar-decorate">
                        <img :src="info.avatar" class="avatar-img">
                </div>
                <div class="mange-menu">
                    <div class="top">
                        <label class="title">{{info.name}}（{{info.account}}）</label>
                    </div>
                    <div class="bottom">
                        <div class="block-bar">
                            <div class="block-bar-container">
                                <div class="block-bar-left">
                                    <ul class="block-bar-tab">
                                        <li class="active">我的收藏</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </teleport>
        <div class="common-mange-content">
            <div class="common-mange-content-left">
                <div class="menu-list-container">
                    <div class="module">
                        <div class="box active">
                            <i class="icon iconfont icon-shoucang"></i>
                            <div>我收藏的图片</div>
                        </div>
                        <div class="tabs">
                            <div class="li">项目1</div>
                            <div class="li">项目2</div>
                            <div class="li">项目3</div>
                            <div class="li">项目4</div>
                            <div class="li">项目5</div>
                        </div>
                    </div>
                    <div class="module">
                        <div class="box">
                            <i class="icon iconfont icon-yishoucang"></i>
                            <div>我收藏的图标</div>
                        </div>
                        <div class="tabs">
                            <div class="li">项目1</div>
                            <div class="li">项目2</div>
                            <div class="li">项目3</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="common-mange-content-right">
                <Component :is="WishList" ></Component>
            </div>
        </div>
    </div>
</template>

<script lang='ts' setup>
import { reactive, toRefs, ref, onMounted } from 'vue';
import {useUserStore} from '@/pinia/user'
import {storeToRefs} from 'pinia'

import WishList from './components/WishList.vue'

const {info} = storeToRefs(useUserStore())

const isShow = ref(false)


onMounted(()=>{
    isShow.value = true
})

</script>
<style lang='scss'>
/* @import url(); 引入css类 */
.header-wrapper-userMange{
    .user-info{
        margin: 0 auto;
        display: flex;
        width: 1200px;
        padding-top: 15px;
        .avatar{
            width: 130px;
            height: 130px;
            position: relative;
            &-decorate{
                position: absolute;
                left: 18px;
                top: -12px;
                height: 119px;
            }
            &-img{
                vertical-align: middle;
                width: 90px;
                height: 90px;
                border-radius: 50%;
                margin-top: 15px;
                object-fit: cover;
                display: initial;
            }
        }
    }
    .mange-menu{
        display: flex;
        flex-direction: column;
        margin-left: 40px;
        box-sizing: border-box;
        padding-top: 10px;
        min-width: 0;
        flex: 1;
        justify-content: space-between;
        .top{
            .title{
                font-size: 22px;
                color: #fff;
                line-height: 22px;
                display: flex;
                align-items: center;
                padding-right: 15px;
            }
        }
        .bottom{
            .block-bar-container{
                .block-bar-left{
                    .block-bar-tab{
                        display: flex;
                        padding-left: 0;
                        li{
                            margin-right: 20px;
                            height: 100%;
                            color: #a6a5ad;
                            position: relative;
                            font-size: 14px;
                            padding: 0 8px;
                            text-align: center;
                             cursor: pointer;
                        }
                        .active{
                            color: #fff;
                        }
                    }
                }
            }
        }
    }
}
.common-mange-content{
    width: 1160px;
    margin: 0px auto 0;
    padding-top: 30px;
    display: flex;
    height: calc(100vh - 201px);
    box-sizing: border-box;
    &-left{
        min-width: 150px;
        max-width: 150px;
        border-right: 1px solid rgba(0,0,0,.05);
        height: 100%;
        overflow: scroll;
        .menu-list-container{
            width: 100%;
            .box{
                cursor: pointer;
                width: 100%;
                margin-bottom: 12px;
                display: flex;
                align-items: center;
                color: #999;
                i{
                    font-size: 18px;
                    margin-right: 5px;
                    width: 18px;
                }
                label{
                    line-height: 20px;
                    font-size: 14px;
                }
            }
            .active{
                color: $PrimaryColor;
            }
            .module{
                margin-bottom:10px;
                .tabs{
                    margin-left: 23px;
                    .li{
                        font-size: 12px;
                        height: 35px;
                        line-height: 35px;
                        white-space: nowrap;
                        width: 90px;
                        overflow: hidden;
                        color: #999;
                        cursor: pointer;
                        text-overflow: ellipsis;
                    }
                }
            }
        }
    }
    &-right{
        flex: 1;
        max-height: 100%;
        overflow: scroll;
    }
}
</style>