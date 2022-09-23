/*
 * @Author: 陈哲
 * @Date: 2022-09-19
 * @LastEditors: cz
 * @Description: 
 */
import { appType } from '@/type'
import { DirectiveBinding, VNode } from 'vue'
export default (App: appType) => {
    App.directive('clickout', {
        mounted(el: HTMLElement, binding, vnode: VNode) {
            function documentHandler(e) {
                // 这里判断点击的元素是否是本身，是本身，则返回
                
                if (el.contains(e.target)) {
                  return false;
                }
                // 判断指令中是否绑定了函数
                if (binding.value) {
                  // 如果绑定了函数 则调用那个函数，此处binding.value就是handleClose方法
                  if(binding.value.callback){
                    
                    if(!e.path.some(res=>res.classList?.contains(binding.value.allowClass))){
                        binding.value.callback()
                    }
                  }else{
                    binding.value(e)
                  }
                 
                }
              }
              // 给当前元素绑定个私有变量，方便在unbind中可以解除事件监听
              el.__clickout__ = documentHandler
              document.addEventListener('click', documentHandler)
        },
        beforeUnmount(el, binding) {
            // 解除事件监听
            document.removeEventListener('click', el.__clickout__)
            delete el.__clickout__
        },
    })
}