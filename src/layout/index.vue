<script lang="ts">
import { routes } from '@/router'
import Navbar from './navbar/index.vue'
import Login from './account/login.vue'
import Almighty from './almighty/index.vue'

import {useAppStore} from '@/pinia/app'
import {storeToRefs} from 'pinia'
export default {
    components:{Navbar,Login,Almighty},
    setup(){
        const {isNavbar} = storeToRefs(useAppStore())

        return {
            routes:routes[0].children,
            isNavbar
        }
    }
}
</script>

<template>
    <!-- <Login/> -->
    <div class="layout" :class='isNavbar?"collapse-show":"collapse-hid"'>
        <Almighty />
        <div class="main-container">
            <router-view></router-view>
        </div>
        <Navbar/>
    </div>
</template>
   

<style lang="scss">

.layout{
    width: 100%;
    .main-container{
        width: calc(100% - 275px);
        transition: var(--transition-default-time);
    }
}
@keyframes myRotate{
    0%{
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(360deg);
    }
}
.collapse-show{
    .collapse-btn{
        svg{
            animation: 2s infinite myRotate;
            animation-timing-function:linear;
        }
    }
    .navbar{
        box-shadow: 0px 0px 10px $PrimaryColor;
    }
}
.collapse-hid{
    .main-container{
        width: 100%;
    }
    .navbar{
        left: 100%;
    }
}
</style>