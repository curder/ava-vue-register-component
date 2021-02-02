import {API_PREFIX, SMS_VERIFY_CODE, SMS_REGISTER, EMAIL_REGISTER} from './urls.js'

export default (params) => {
    const {
        domain,
        signature,
        prefix = API_PREFIX,
        verify_code_path = SMS_VERIFY_CODE,
        sms_register_path = SMS_REGISTER,
        email_register_path = EMAIL_REGISTER,
    } = params

    return {
        sms_verify_code_url: `${domain}/${prefix}/${verify_code_path}`,
        sms_signature_name: signature,
        sms_register_url: `${domain}/${prefix}/${sms_register_path}`,
        email_register_url: `${domain}/${prefix}/${email_register_path}`
    }
}
