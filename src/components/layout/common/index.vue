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

<script setup>
import {useAppStore} from '@/pinia/app'
import { storeToRefs } from 'pinia';
const {commonHeaderVisible} = storeToRefs(useAppStore())

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
        background: var(--background-color);
        z-index: 99;
        transform: translateY(-110%);
        transition: .4s;
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