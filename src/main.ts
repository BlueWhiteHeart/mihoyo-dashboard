// import './plugins/axios'
import { createApp } from 'vue'

import App from './App.vue'
import router from './router/index'
import store from './store/index'
import 'amfe-flexible'
import Vant from 'vant';
import 'vant/lib/index.css';
import axios from './utils/axios'
const app = createApp(App)

app.config.globalProperties.$http = axios;
// 使用配置的路由
app.use(router)
app.use(store)
console.log('00000000000000000000000000000')
console.log(router)
console.log('00000000000000000000000000000')
app.use(Vant);
app.mount('#app')
