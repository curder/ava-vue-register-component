// Import asset file.
import './assets/sass/index.scss'

import default_params from './configs/sites/avatrade.cn/prod.js'

import ValidateSms from './components/ValidatedSms.vue'
import ProgressButton from './components/ProgressButton.vue'

const Plugin = {
    // eslint-disable-next-line
    install(Vue, params = {}) {
        Vue.prototype.$ava = {}
        // domain && signature
        params = Object.assign({}, default_params, params)

        const getRegisterParamsObject = (domain, signature) => {
            const prefix = 'api/v1'
            return {
                sms_verify_code_url: `${domain}/${prefix}/registers/by-sms/send-code`,
                sms_signature_name: signature,
                sms_register_url: `${domain}/${prefix}/registers/by-sms`
            }
        }

        Vue.prototype.$ava.register = getRegisterParamsObject(params.domain, params.signature)
        Vue.component('progress-button', ProgressButton) // 状态按钮
        Vue.component('validate-sms', ValidateSms) // 手机号验证
    }
}



export default Plugin

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(Plugin)
    if (Plugin.installed) {
        Plugin.installed = false
    }
}
