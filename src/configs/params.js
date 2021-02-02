export default (params) => {
    const {
        domain,
        signature,
        prefix = `api/v1`,
        verify_code_path = `registers/by-sms/send-code`,
        sms_register_path = `registers/by-sms`,
        email_register_path = `registers/by-email`,
      } = params;

    return {
        sms_verify_code_url: `${domain}/${prefix}/${verify_code_path}`,
        sms_signature_name: signature,
        sms_register_url: `${domain}/${prefix}/${sms_register_path}`,
        email_register_url: `${domain}/${prefix}/${email_register_path}`
    }
}
