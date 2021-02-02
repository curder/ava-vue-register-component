import Vue from 'vue'
import App from './App.vue'
import router from './router'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

import avaVueRegisterComponent from '../src/index.js'

Vue.use(avaVueRegisterComponent, {
    // validateFormLogic: 'validate-form-logic', // 注册逻辑组件
    // progressButton: 'progress-button', // 执行中状态按钮

    // domain: 'https://register-api.avadev.cn.test', // 自定义注册域名
    domain: 'https://register-api.avgpro.cn.test', // 自定义注册域名
    signature: 'avatrade', // 短信签名
    // prefix: 'api/v2',
    // verify_code_path: `registers/by-sms/send-code`, // 发送短信验证码
    // sms_register_path: `registers/by-sms`, // 注册 - 通过手机号注册
    // email_register_path: `registers/by-email`, // 注册 - 通过邮箱注册
})

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
