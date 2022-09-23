import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// svg
import 'virtual:svg-icons-register'
import installSvg from './plugin/svg'


//global methods
import installMethods from './js/methods/index'
import installElement from './config/element-plus'

import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

//directive
import directive from './js/directive'

import './style/iconFont/iconfont.js'
import './style/iconFont/iconfont.css'


//permission
import './permission'



const app = createApp(App)



app.use(createPinia().use(piniaPluginPersistedstate))

//引入element-plus
installElement(app)
installSvg(app)
installMethods(app)
directive(app)

app.use(router)
app.mount('#app')
 