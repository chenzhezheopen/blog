<template>
    <div class="layout-common-wrapper">
        <div class="layout-common-header">
            <slot name="header" class="111"></slot>
        </div>
        <slot name="body"></slot>
        <div class="layout-common-bottom">
            <slot name="bottom"></slot>
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
    .layout-common-header {
        width: 100%;
        position: sticky;
        top: 0;
        background: var(--background-color);
        z-index: 99;
    }
    .layout-common-bottom {
        margin-top: 50px;
        img {
            width: 100%;
        }
    }
}
</style>