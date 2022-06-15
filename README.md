# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VS Code's command palette, look for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default, Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VS Code window by running `Developer: Reload Window` from the command palette.

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).



[UI层面]：参考其他设计网站

[程序设计]:
    1：引入element-plus作为ui库
        在config文件中按需引入css与组件并且挂载到全局;
        在main中将element方法二次封装并且作为全局方法
    2：分多个模块
        集成csdn，学习后续还会加的等模块，风格样式可能不一样所以不会再layout里面统一定义布局与header，bottom
        在components中定义每一个模块中的布局
    3：数据
        对接第三方接口，
        配置多个跨域配置
    4：权限
        不登录的话只能看到csdn模块(暂时)
        配置个临时账号，登录后添加动态路由与可视区域
    5：数据存储
        使用pain(vuex5)
    6：自适应
        在component中layout配置结构，做出pc与h5的骨架
        在组件中写出pc与h5的样式，js公用
        window.resize监视窗口大小，使用rem兼容移动端
