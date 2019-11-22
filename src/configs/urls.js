/** @namespace window.FX.api_url */
const API_DOMAIN = 'https://register-api.avgpro.cn.test' //window.FX.api_url
const API_PREFIX = 'api/v1'

export const SMS_VERIFY_CODE_URL = `${API_DOMAIN}/${API_PREFIX}/registers/by-sms/send-code`  // 发送验证码

export const SMS_REGISTER_URL = `${API_DOMAIN}/${API_PREFIX}/registers/by-sms` // 验证手机号注册

