// Import asset file.
import './assets/sass/index.scss'

import getRegisterParamsObject from './configs/params.js'
import * as default_params from './configs/sites/avatrade.cn/prod.js'

import ValidateFormLogic from './components/ValidateFormLogic.vue'
import ProgressButton from './components/ProgressButton.vue'

const Plugin = {
  // eslint-disable-next-line
  install(Vue, params = {}) {
    // 自定义组件名
    let { progressButton, validateFormLogic } = params

    // 域名和签名
    params = Object.assign({}, default_params, params)

    // 注册私有属性
    if (Vue.prototype.$ava == undefined) {
      Vue.prototype.$ava = {}
    }

    Vue.prototype.$ava.register = getRegisterParamsObject({
      domain: params.domain,
      signature: params.signature,
      prefix: params.prefix,
      verify_code_path: params.verify_code_path,
      sms_register_path: params.sms_register_path,
      email_register_path: params.email_register_path,
    })

    // 注册组件
    Vue.component(progressButton || 'progress-button', ProgressButton) // 状态按钮
    Vue.component(
      validateFormLogic || 'validate-form-logic',
      ValidateFormLogic
    ) // 手机号验证
  }
}

export default Plugin
