import Vue from 'vue'
import App from './App.vue'
import router from "./router"

import VueRouter from 'vue-router'
Vue.use(VueRouter)


import avaVueRegisterComponent from '../src/index.js'
Vue.use(avaVueRegisterComponent, {
    domain: 'https://register-api.avgpro.cn.test',
    signature: 111,
})

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
