<template>
    <div class="banner-wrapper flex-align-center">
        <!-- <img :src="`${$darkImage('')}`"> -->
        <img src="../../assets/common/hero.png" alt="">
        <div class="banner-content">
            <div class="header">
                个人网站
            </div>
            <div class="eg">
                集成个<i>技术分享平台</i>与 <i>学习资料</i>
            </div>
            <div class="share">
                完工上传github
            </div>
            <div class="transverse"></div>
            <div class="title">
                csdn模块分享测试实例，学习模块作为测试模块，资料模块是一些小知识与结论
            </div>
        </div>
    </div>
    <div class="function-modules">
        <div class="function-modules-header">
            Features
        </div>
        <div class="transverse"></div>
        <div class="function-modules-content">
            <div class="list">
                <div class="box">
                    <img src="@/assets/common/home-module1-icon.png">
                    <div class="name" @click="$router.push('/csdn')">
                        CSDN
                    </div>
                    <div class="text">
                        将csdn里面的文章内容用代码的形式实现，写成实例参考
                    </div>
                </div>
                <div class="box">
                    <img src="@/assets/common/home-module1-icon.png">
                    <div class="name">
                        项目问题
                    </div>
                    <div class="text">
                        这个项目开发过过程中遇到的问题以及解决方案与思路。
                    </div>
                </div>
                <div class="box">
                    <img src="@/assets/common/home-module1-icon.png">
                    <div class="name">
                        笔记
                    </div>
                    <div class="text">
                        记录一些知识点
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
<script lang='ts' setup>

import {getCurrentInstance } from 'vue'
import {useAppStore} from '@/pinia/app'
import {storeToRefs} from 'pinia'

// import axios from 'axios'

// const getDta = ()=>{
//     axios.get('/doubi-api/search?keyword=a').then(res=>{
//         console.log(res);
//     })
// }
// getDta()
// function Temp(){

// }
// Temp.prototype.myjoin=function (emoji=',') {
//       let self = this;
//       let str = "";
//       let i = 0;
//       if (!Array.isArray(self)) throw `${self} is not Array`;
//       if(self.length===0) return ''
//       if (self.length === 1) return `${self[0]}`;
//       i = 1;
//       str = this[0];
//       for (; i < self.length; i++) {
//         str += `${emoji}${self[i]}`;
//       }
//       return str;
// }
// let arr = [1,2,3]
// let str = '223333'
// arr.__proto__ = Temp.prototype
// console.log(arr);

// console.log(arr.myjoin(','));
// console.log(arr);

// console.log(Object.prototype.toString.call(arr));

const obj = Object.create({ foo: 1 }, { // foo is on obj's prototype chain.
  bar1: {
    value: 2  // bar is a non-enumerable property.
  },
  baz: {
    value: 3,
    enumerable: true  // baz is an own enumerable property.
  }
});
console.log(obj);

const copy = Object.assign({}, obj);
console.log(copy); // { baz: 3 }

// let target = Object.defineProperty({}, 'foo', {
//   value: 1,
//   writable: false
// }); // target.foo is a read-only property

// Object.assign(target, { bar: 2 }, { foo2: 3, foo3: 3 }, { baz: 4 });
// console.log(target);



</script>
<style scoped lang='scss'>
.banner-wrapper {
    width: 100%;
    position: relative;
    padding: 5px;
    box-sizing: border-box;
    img {
        width: 40%;
        margin-right: 10%;
    }
    .banner-content{
        top: calc(40% - 15px);
        left: 10%;
        text-align: left;
            color: var(--el-color-primary);
        .header{
            line-height: 40px;
            font-size: 40px;
            font-weight: bold;
            margin-bottom: 30px;
            font-family: none;
            letter-spacing: 1px;
        }
        .eg{
            line-height: 40px;
            font-size: 20px;
            font-weight: bold;
            letter-spacing: 1px;
            width: 400px;
            i{
                font-size: 29px;
                color: red;
            }
        }
        .share{
            line-height: 40px;
            font-size: 40px;
            font-weight: bold;
            margin-top: 10px;
            width: 400px;
        }
        .transverse{
            width: 100px;
            margin:20px 0 50px;
            height: 2px;
            border: 1px;
            background: $PrimaryColor;
        }
        .title{
            line-height: 24px;
            font-size: 14px;
            font-weight: bold;
            width: 400px;
        }
    }
}
.function-modules{
    width: 78%;
    min-width: 1200px;
    background: var(--background-color);
    min-height: 300px;
    border-radius: 10px;
    margin: 0 auto;
    margin-top: -33px;
    position: relative;
    box-shadow: 0 0 20px $PrimaryColor;
    padding: 3vw;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    &-header{
        display: inline-block;
        text-align: center;
        font-size: 30px;
        background: linear-gradient(90deg,var(--second-color),$PrimaryColor);
        -webkit-background-clip: text;
        color: transparent;
        font-weight: 550;
    }
    .transverse{
        width: 80px;
        background: linear-gradient(90deg,var(--second-color),$PrimaryColor);
        margin: 10px auto 50px;
        height: 2px;
        border-radius: 1px;
    }
    &-content{
        width: 100%;
        .list{
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            .box{
                width: 33%;
                min-width: 33%;
                max-width: 33%;
                display: flex;
                flex-direction: column;
                align-items: center;
                min-height: 200px;
                padding: 1vw;
                box-sizing: border-box;
                img{width: 3vw;}
                .name{
                    color: var(--vt-c-text-2);
                    font-weight: bold;
                    font-size: 20px;
                    margin-top: 20px;
                }
                .text{
                    color: $PrimaryColor;
                    font-size: 14px;
                    margin-top: 20px;
                    width: 300px;
                }
            }
        }
    }
}
$content:"red";
$content:"blue" !default;

.demo{
    color:$content;
}

</style>
