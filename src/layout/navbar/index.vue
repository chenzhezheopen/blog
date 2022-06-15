<script lang="ts">
import {ref,reactive,toRefs} from 'vue'
import {useAppStore} from '@/pinia/app'
import {storeToRefs} from 'pinia'
export default {
    setup(){
        
        const color = ref(null)
        
        //setting system color
        const handlerChangePrimary = (color:string)=>{
           document.getElementsByTagName('html')[0]
                    .style.setProperty(`--el-color-primary`, color);
        }

        //operation state color
        const appStore = useAppStore()
        const {isNavbar,isThemeDark} = storeToRefs(useAppStore())


        const state = reactive({
        })

        const changeTheme = ()=>{
            document.getElementsByTagName('html')[0].className=isThemeDark.value?'dark':'light'
        }
            
        return {
            color,
            handlerChangePrimary,
            //pinia
            isNavbar,
            isThemeDark,
            changeNavBar:appStore.changeNavBar,
            changeTheme
        }
    }
}
</script>

<template>
    <div class="navbar">
        <div class="collapse-btn flex-center" @click="changeNavBar(!isNavbar)">
            <SvgIcon name='setting' />
        </div>
        <div class="navbar-list">
            <div class="label">
                主题色：
            </div>
            <div class="operation">
            <el-color-picker v-model="color" show-alpha @active-change='handlerChangePrimary' />
            </div>
        </div>
        <div class="navbar-list">
            <div class="label">
                暗黑模式：
            </div>
            <div class="operation">
                <el-switch v-model="isThemeDark" @change='changeTheme' />
            </div>
        </div>
    </div>
</template>


<style lang="scss">
.navbar{
    top: 0;
    left: calc(100% - 275px);
    height: 100%;
    width: 275px;
    background: var(--background-color);
    box-sizing: border-box;
    padding: 10px 20px;
    transition: var(--transition-default-time);
    position: fixed;
    z-index: 200;
    .collapse-btn{
        position: absolute;
        right: 100%;
        top: calc(50% - 30px);
        width: 30px;
        height: 30px;
        border-radius: 5px 0 0 5px;
        border: 2px $PrimaryColor solid;
        border-right:none;
        cursor: pointer;
        background: var(--background-color);
        box-sizing: border-box;
        svg{
            width: 20px;
            height: 20px;
            use{
                fill: $PrimaryColor;
            }
        }
    }
    .navbar-list{
        display: flex;
        align-items: center;
        margin-top: 20px;
        .label{
            min-width: 75px;
        }
        .operation{
            
            .el-color-picker{
                .el-color-picker__trigger{
                    // background: green;
                }
                .el-color-picker__color-inner{
                    background-color: $PrimaryColor !important;
                }
            } 
        }
    }
}
</style>