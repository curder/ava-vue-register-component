import Vue from 'vue';
import App from './App.vue';
import router from './router';

import VueRouter from 'vue-router';
Vue.use(VueRouter)

import avaVueRegisterComponent from '../src/index.js';
Vue.use(avaVueRegisterComponent, {
  // validateFormLogic: 'validate-form-logic', // 注册逻辑组件
  // progressButton: 'progress-button', // 执行中状态按钮

  domain: 'https://register-api.avadev.cn.test', // 自定义注册域名
  // domain: 'https://dev-register-api.avadev.cn', // 自定义注册域名
  signature: 'avatrade' // 短信签名
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
