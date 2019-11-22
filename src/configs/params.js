export default (domain, signature) => {
    const prefix = 'api/v1'
    return {
        sms_verify_code_url: `${domain}/${prefix}/registers/by-sms/send-code`,
        sms_signature_name: signature,
        sms_register_url: `${domain}/${prefix}/registers/by-sms`,
        email_register_url: `${domain}/${prefix}/registers/by-email`
    }
}
