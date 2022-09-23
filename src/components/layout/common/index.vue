<template>
    <div class="layout-common-wrapper">
        <div class="layout-common-header" :class="{isShow:commonHeaderVisible}">
            <slot name="header" class="111"></slot>
        </div>
        <slot name="body"></slot>
        <div class="layout-common-bottom">
            <slot name="bottom"></slot>
        </div>
    </div>
</template>

<script lang='ts'>
import {useAppStore} from '@/pinia/app'
import { storeToRefs } from 'pinia';
export default{
    setup(){
        const {commonHeaderVisible} = storeToRefs(useAppStore())
        return {
            commonHeaderVisible
        }
    }
}


</script>

<style lang='scss'>
.layout-common-wrapper {
    width: 100%;
    min-height: 100vh;
    position: relative;
    .layout-common-header {
        width: 100%;
        position: sticky;
        top: 0;
        z-index: 9;
        transform: translateY(-110%);
        transition: .4s;
        background-image: radial-gradient(transparent 1px,var(--background-color) 1px);
        background-size: 4px 4px;

        backdrop-filter: saturate(50%) blur(4px);
    }
    .isShow{
        transform: translateY(0);
    }
    .layout-common-bottom {
        margin-top: 50px;
        img {
            width: 100%;
        }
    }
}
</style>