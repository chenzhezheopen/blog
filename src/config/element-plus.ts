import { ElButton,ElMenu,ElMenuItem,ElSubMenu,ElColorPicker,ElTimeline,ElTimelineItem,ElSwitch,ElTag } from 'element-plus'
import { App} from 'vue'
    
//按需引入样式
import 'element-plus/es/components/button/style/css'
import 'element-plus/es/components/menu/style/css'
import 'element-plus/es/components/color-picker/style/css'
import 'element-plus/es/components/timeline/style/css'
import 'element-plus/es/components/timeline-item/style/css'
import 'element-plus/es/components/switch/style/css'
import 'element-plus/es/components/tag/style/css'

import '@/style/element/element_cover.scss'
    
export default (app:App<Element>) => {
    app.use(ElButton)
    app.use(ElMenu)
    app.use(ElMenuItem)
    app.use(ElSubMenu)
    app.use(ElColorPicker)
    app.use(ElTimeline)
    app.use(ElTimelineItem)
    app.use(ElSwitch)
    app.use(ElTag)
}