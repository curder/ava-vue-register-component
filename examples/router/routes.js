function page(path) {
    return () => import( /* webpackChunkName: '' */ `~/pages/${path}`).then(m => m.default || m)
}

export default [
    { path: '/', name: 'home', component: page('Home.vue') },
    { path: '/sms-register', name: 'sms-register', component: page('SmsRegister.vue')}, // 手机号注册
    { path: '/email-register', name: 'email-register', component: page('EmailRegister.vue')}, // 邮箱注册

    { path: '*', component: page('errors/404.vue') }
]
