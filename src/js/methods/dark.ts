import { App } from 'vue'

import {useAppStore} from '@/pinia/app'
import {storeToRefs} from 'pinia'

export default (app:App<Element>) => {
    app.config.globalProperties.$darkImage = (url:string) => {
        const { isThemeDark } = storeToRefs(useAppStore())
        const urlTree = url.split('.')
        urlTree[urlTree.length - 1] = isThemeDark.value ? urlTree[urlTree.length - 1] + '-dark' : urlTree[urlTree.length - 1]
        const imgUrl = urlTree.join('.')
        
        return imgUrl
    }
}