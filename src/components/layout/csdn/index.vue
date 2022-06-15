<template>
    <div class="layout-common-wrapper">
        <div class="layout-common-header">
            <slot name="header" class="111"></slot>
        </div>
        <div class="layout-common-body">
            <slot name="body"></slot>
        </div>
    </div>
</template>

<script>
export default {
    created() {
        window.scroll(() => {
            console.log(1111111);
        })
    }
}

</script>

<style lang='scss'>
.layout-common-wrapper {
    width: 100%;
    min-height: 100vh;
    position: relative;
    display: flex;
    .layout-common-header {
        width: 10vw;
        min-width: 10vw;
        max-width: 10vw;
        background: var(--background-color);
        height: 100vh;
        z-index: 99;
        overflow: scroll;
    }
    .layout-common-body{
        flex: 1;
    }
}
</style>