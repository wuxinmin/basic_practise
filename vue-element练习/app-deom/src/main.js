import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 如果是全局的话就应该是如下操作
//import echarts from 'echarts'
import axios from 'axios';


Vue.config.productionTip = false
Vue.use(ElementUI);
//全局操作需要在Vue原型下添加如下操作，如果只在局部页面就不需要全局添加(对应页面需要原型操作)
//Vue.prototype.$echarts = echarts
Vue.prototype.$http = axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
