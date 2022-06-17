<template>
    <div class="log-container">
        <div class="log-container-header">
            工程日志
        </div>
        <div class="log-container-content" :style="{filter:isThemeDark?'brightness(0.8)':'brightness(1)'}">
            <div class="log-box">
                <el-timeline>
                    <el-timeline-item timestamp="2022/5/22" placement="top">
                        <el-card :style="{textAlign:'left'}">
                            <h4>项目搭建</h4>
                            <p>1：配置全局svg</p>
                            <p>2：按需引入element样式文件</p>
                            <p>3：按需引入element组件</p>
                            <p>4：自定义element样式变量实现自定义主题色</p>
                            <p>6：使用:root定义html样式实现黑暗模式</p>
                            <p>7：引入pinia实现数据存储</p>
                            <p>8：设计程序路由结构，分为多个模块与不同的结构布局</p>
                        </el-card>
                    </el-timeline-item>
                    <el-timeline-item timestamp="2022/5/23" placement="top">
                        <el-card :style="{textAlign:'left'}">
                            <h4>首页建设与侧边栏项目设置</h4>
                            <p>1：搭建首页的顶部（参考千图网）</p>
                            <p>2：搭建首页的features</p>
                            <p>3：完成首页的黑暗模式</p>
                        </el-card>
                    </el-timeline-item>
                    <el-timeline-item timestamp="2022/5/24" placement="top">
                        <el-card :style="{textAlign:'left'}">
                            <h4>feature</h4>
                            <p>1：路由按模块分离</p>
                            <p>2：添加全局路由钩子与单个模块路由钩子</p>
                            <p>3：动态设置document title</p>
                        </el-card>
                    </el-timeline-item>
                    <el-timeline-item timestamp="2022/6/16" placement="top">
                        <el-card :style="{textAlign:'left'}">
                            <h4>知识库</h4>
                            <p>1：路由knowledge的模块</p>
                            <p>2：异步加载实例</p>
                            <p>3：视口区域加载实例</p>
                        </el-card>
                    </el-timeline-item>
                    <el-timeline-item timestamp="2022/6/17" placement="top">
                        <el-card :style="{textAlign:'left'}">
                            <h4>动画优化</h4>
                            <p>1：common模块跳转时header的动画</p>
                        </el-card>
                    </el-timeline-item>
                </el-timeline>
            </div>
        </div>
    </div>
</template>
<script lang='ts' setup>
import {getCurrentInstance } from 'vue'
import {useAppStore} from '@/pinia/app'
import {storeToRefs} from 'pinia'
//operation state color
const {isThemeDark} = storeToRefs(useAppStore())
</script>
<style scoped lang='scss'>
 .log-container{
    width: 78%;
    box-sizing: border-box;
    background: url(@/assets/common/log-background.png);
    background-color: $PrimaryColor;
    margin: 0 auto;
    margin-top: 50px;
    height: 600px;
    padding: 20px;
    border-radius: 10px;
    &-header{
        width: 100%;
        text-align: center;
        font-size: 30px;
        font-weight: bold;
        margin-bottom: 30px;
        color: var(--vt-c-text-1)
    }
    &-content{
        background: url(@/assets/common/log-content-background.png);
        background-size: 100% 100%;
        width: 100%;
        height: 496px;
        padding: 50px 80px;
        box-sizing: border-box;
        overflow: hidden;
        .log-box{
            height: 100%;
            overflow-y: scroll;
        }
        .log-box::-webkit-scrollbar{
            display: none;
        }
    }
}
</style>
