import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store/index';
import 'amfe-flexible';

// createApp(App).use(router).use(store).mount("#app");
const app = createApp(App);
// 使用配置的路由
app.use(router);
app.use(store);
app.mount('#app');
