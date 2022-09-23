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
                    <!-- <div class="menu flex-align-center">
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
                    </div> -->
                    <el-button type="primary" class="almighty-allow" @click="open('Login')">登陆</el-button>
                </div>
            </template>
            <template #body>
                <router-view v-slot="{ Component }">
                    <component :is="Component" />
                </router-view>
                    <!-- <keep-alive>
                        <component :is="Component"/>
                    </keep-alive>
                </router-view> -->
            </template>
        </commonLayout>
    </div>
</template>
<script lang="ts">
import { useAppStore } from "@/pinia/app";
import { useAlmightyStore } from "@/pinia/almighty";
import { storeToRefs } from "pinia";
import commonLayout from "@/components/layout/common/index.vue";
import baseData from "@/api/modules/data";

import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";
import commonRoute from "@/router/common";
import CommonMenu from "./menu.vue";

export default {
    components: { commonLayout,CommonMenu },
    beforeRouteLeave(to, from, next) {
        const { commonHeaderVisible } = storeToRefs(useAppStore());
        commonHeaderVisible.value = false;
        setTimeout(() => {
            next();
        }, 400);
    },
    setup() {
        const { commonHeaderVisible } = storeToRefs(useAppStore());
        const { open } = useAlmightyStore() 
        //menu data
        const menuNav:any = commonRoute.children;
        
        //init active
        const route = useRoute();
        const activeIndex = ref("/page-common/home");
        onMounted(() => {
            activeIndex.value = route.path;
            setTimeout(() => {
                commonHeaderVisible.value = true;
            }, 500);
        });

        const init = async () => {
            let d1 = await baseData.node({ a: 1 });
            console.log(d1);

            let d2 = await baseData.ga({ a: 1 });
            console.log(d2);
        };

        init();
        return{
            menuNav,
            activeIndex,
            handleSelect:()=>{},
            open
        }
    },
};
</script>
<style scoped lang='scss'>
.page-common-container {
    width: 100%;
    .header-wrapper {
        width: 100%;
        padding: 0 50px 0 50px;
        box-sizing: border-box;
        height: 56px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0 0 5px #ccc;
        .logo {
            img {
                height: 50px;
            }
        }
        .el-menu--horizontal {
            border: none !important;
        }
        .is-active {
            font-weight: bold;
        }
        .menu {
            min-width: 50%;
            .el-menu {
                background: none;
            }
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
                .is-active {
                    // background: var(--vt-c-text-1) !important;
                    color: $PrimaryColor;
                }
            }
        }
    }
    .bottom-content {
        position: relative;
        .label {
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
