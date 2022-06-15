<template>
    <div class="page-common-container">
        <commonLayout>
            <template #bottom>
                <div class="bottom-content">
                    <div class="label flex-center">
                        {{'</>'}}
                    </div>
                    <img src="@/assets/common/bottom.png" alt="">
                </div>
            </template>
            <template #header>
                <div class="header-wrapper">
                    <div class="logo">
                        <img src="@/assets/gif/logo.gif" alt="">
                    </div>
                    <div style="flex:1"></div>
                    <div class="menu flex-align-center">
                        <el-menu 
                            :ellipsis='false'
                            :default-active="activeIndex" 
                            class="common-header-menu" 
                            mode="horizontal" 
                            @select="handleSelect"
                            :router='true'
                            :route='menuNav'
                        >
                        <template v-for="item in menuNav" :key="item.path">
                            <CommonMenu :data="item" v-if="item.hidden!=false" />
                        </template>
                        </el-menu>
                    </div>
                </div>
            </template>
            <template #body>
                <router-view></router-view>
            </template>
        </commonLayout>
    </div>
</template>
<script lang='ts' setup>
import commonLayout from "@/components/layout/common/index.vue";
import {useRoute} from 'vue-router'
import { ref,onMounted } from "vue";
import commonRoute from '@/router/common'
import CommonMenu from './menu.vue'


const menuNav = commonRoute.children
const route = useRoute()
const activeIndex = ref("/page-common/home");
onMounted(()=>{
    activeIndex.value = route.path
})
</script>
<style scoped lang='scss'>
.page-common-container {
    width: 100%;
    .header-wrapper {
        width: 100%;
        padding: 0 350px 0 50px;
        box-sizing: border-box;
        height: 56px;
        display: flex;
        justify-content: space-between;
        .logo {
            img {
                height: 100%;
            }
        }
        .el-menu--horizontal{
            border: none !important;
        }
        .is-active {
            font-weight: bold;
        }
        .menu {
            min-width: 50%;
            .el-menu{background: none;}
            .common-header-menu {
                .el-menu-item:hover {
                    background: none;
                }
                .el-menu-item {
                    // border: none !important;
                    background: none !important;
                    padding: 0;
                    color: var(--vt-c-text-2);
                    // border-radius: 16px;
                    min-width: 80px;
                    margin-right: 30px;
                }
                .is-active{
                    // background: var(--vt-c-text-1) !important;
                    color: $PrimaryColor;
                }
            }
        }
    }
    .bottom-content{
        position: relative;
        .label{
            position: absolute;
            top: 30%;
            left: 10%;
            width: 40px;
            height: 40px;
            border-radius: 5px;
            background: var(--dark-color1);
            color: var(--vt-c-text-3);
            font-size: 14px;
            line-height: 14px;
        }
    }
}
</style>
