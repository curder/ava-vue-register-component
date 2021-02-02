import Form from 'form-backend-validation'

import {bus_events} from '../configs/events.js'
// import { sms_signatures } from '../configs/signatures.js'
import fields from '../configs/fields.js'
import rules from '../configs/rules.js'

const verifyCodeTotalTimer = 60

export default {
    data() {
        return {
            verifyCodeTimer: null, // 倒计时
            verifyCodeCanBeSend: true, // 是否能发送验证码状态
            verifyCodeTotalTimer: verifyCodeTotalTimer, // 60s倒计时
            phone: fields.phone, // 手机号字段名
            verifyCodeIsProcessing: false, // 验证码提交状态

            verifyCodeForm: new Form({
                request_type_id: this.request_type_id,
                request_name: this.request_name,
                request_url: this.request_url,
                phone: '',
                phone_rule: rules.phone_required,
                signature: this.$ava.register.sms_signature_name, // 添加自定义签名配置
            })
        }
    },

    computed: {
        verifyCodeFormAction() {
            // 手机号发送验证码地址
            return this.$ava.register.sms_verify_code_url
        }
    },
    mounted() {
        this.verifyCodeForm.signature = this.$ava.register.sms_signature_name
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
                let response = await this.createVerifyCodeRequest()

                this.verifyCodeIsProcessing = false // 重置发送验证码按钮状态

                this.verifyCodeSentSuccessHandle(response)
            } catch (error) {
                this.verifyCodeIsProcessing = false // 重置发送验证码按钮状态

                if (error.response.status === 422) {
                    this.verifyCodeSentFailHandle(error)
                }
            }
        },

        createVerifyCodeRequest() {
            // 短信发送之前提交事件
            this.$emit(bus_events.verify_code_will_be_send, {
                form: this.verifyCodeForm
            })
            return this.verifyCodeForm[this.method](this.verifyCodeFormAction)
        },

        verifyCodeSentSuccessHandle(response) {
            // 短信发送成功
            this.form.errors.clear(fields.phone) // 清空手机号字段错误
            this.verifyCodeForm.errors.clear() // 清空错误
            this.countDown() // 倒计时
            this.$emit(bus_events.verify_code_sent_successful, response)
        },

        verifyCodeSentFailHandle(error) {
            // 短信发送失败
            this.$emit(bus_events.verify_code_sent_fail, error.response)
        },

        countDown() {
            // 倒计时
            this.verifyCodeCanBeSend = false
            this.verifyCodeTimer = setInterval(() => {
                this.verifyCodeTotalTimer = this.verifyCodeTotalTimer - 1
                if (this.verifyCodeTotalTimer <= 0) {
                    this.resetCountDown()
                }
            }, 1000)
        },

        resetCountDown() {
            // 重置倒计时
            this.verifyCodeCanBeSend = true
            this.verifyCodeIsProcessing = false // 修改按钮状态
            this.verifyCodeTotalTimer = verifyCodeTotalTimer // 修正时间
            clearInterval(this.verifyCodeTimer)
        }
    }
}
