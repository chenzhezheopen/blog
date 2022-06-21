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

//permission
import './permission'



const app = createApp(App)


app.use(createPinia().use(piniaPluginPersistedstate))

//引入element-plus
installElement(app)
installSvg(app)
installMethods(app)

app.use(router)
app.mount('#app')
 