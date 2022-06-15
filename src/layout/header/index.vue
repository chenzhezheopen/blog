<script lang="ts">
import { toRefs } from "vue";
export default {
    name: "Header",
    props: {
        routersList: {
            type: Array,
            default: () => [],
        },
        startUrl:{
            type: String,
            default: () => '',
        }
    },
    setup(props) {
        const { routersList } = toRefs(props);
        console.log(routersList.value);
    },
};
</script>


<template>
    <div class="nav" v-if="routersList.length>0">
        <template v-for="item in routersList" :key="item.path">
            <button @click="$router.push(`${startUrl?'':'/'}${item.path}`)">{{item.name}}</button>
            <Header v-if="item.children" :routersList="item.children" :startUrl="item.path" />
        </template>
    </div>
</template>


<style lang="scss">
.nav {
    width: 1200px;
    margin: 0 auto;
    margin-top: 30px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    button {
        color: #fff;
        background: #009688;
        padding: 5px 10px;
        border-radius: 4px;
        margin-left: 20px;
        border: none;
        cursor: pointer;
        transition: .4s;
    }
    button:hover {
        box-shadow: 0px 0px 5px #009688;
    }
    button:first-child {
        margin-left: 0;
    }
}
</style>