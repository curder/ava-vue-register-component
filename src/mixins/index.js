import Form from 'form-backend-validation'

import {bus_events} from '../configs/events.js'
import {SMS_VERIFY_CODE_URL} from '../configs/urls.js'
import {sms_signatures} from '../configs/signatures.js'
import fields from '../configs/fields.js'
import rules from '../configs/rules.js'

export default {
    data() {
        return {
            verifyCodeTimer: null, // 倒计时
            verifyCodeCanBeSend: true, // 是否能发送验证码状态
            verifyCodeTotalTimer: 60, // 60s倒计时
            phone: fields.phone, // 手机号字段名
            verifyCodeIsProcessing: false, // 验证码提交状态

            verifyCodeForm: new Form({
                request_type_id: this.request_type_id,
                request_name: this.request_name,
                request_url: this.request_url,
                phone: '',
                phone_rule: rules.phone_required,
                signature: sms_signatures.default // 添加自定义签名
            })
        }
    },

    computed: {
        verifyCodeFormAction() { // // 手机号发送验证码地址
            return SMS_VERIFY_CODE_URL
        }
    },

    methods: {
        async verifyCodeSendHandle() {
            // 将手机号码同步到表单中
            Object.assign(this.verifyCodeForm, {
                // access_token: this.form.phone,
                phone: this.form.phone
            })

            this.verifyCodeIsProcessing = true

            try {
                let response = await this.verifyCodeForm[this.method](this.verifyCodeFormAction) // 发送验证

                this.verifyCodeSentSuccessHandle(response)
            } catch(error) {
                this.verifyCodeIsProcessing = false // 重置发送验证码按钮状态

                if (error.response.status === 422) {
                    this.verifyCodeSentFailHandle(error)
                }
            }
        },

        verifyCodeSentSuccessHandle(response) { // 短信发送成功
            this.form.errors.clear(fields.phone) // 清空手机号字段错误
            this.verifyCodeForm.errors.clear() // 清空错误
            this.countDown() // 倒计时
            this.$emit(bus_events.sms_verify_code_sent_successful, response)
        },

        verifyCodeSentFailHandle(error) { // 短信发送失败
            this.$emit(bus_events.sms_verify_code_sent_fail, error.response)
        },

        countDown() { // 倒计时
            this.verifyCodeCanBeSend = false
            this.verifyCodeTimer = setInterval(() => {
                this.verifyCodeTotalTimer = this.verifyCodeTotalTimer - 1
                if (this.verifyCodeTotalTimer <= 0) {
                    this.resetCountDown()
                }
            }, 1000)
        },

        resetCountDown() { // 重置倒计时
            this.verifyCodeCanBeSend = true
            clearInterval(this.verifyCodeTimer)
        },
    }
}
