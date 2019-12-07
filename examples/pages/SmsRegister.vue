<template>
    <div class="flex justify-center items-center flex-1">
        <validate-form-logic request_type_id="9qIyq8c4vryJ"
                             request_name="测试"
                             @register-fail="smsRegisterFail"
                             @register-successful="smsRegisterSuccessful"
                             @verify-code-sent-successful="verifyCodeSentSuccessful"
                             @verify-code-sent-fail="verifyCodeSentFail">
            <div class="p-8 border rounded bg-white" slot-scope="{ form, isProcessing, formSubmitHandle, verifyCodeSendHandle, verifyCodeForm, verifyCodeCanBeSend, verifyCodeTotalTimer, verifyCodeIsProcessing }" v-cloak>

                <h2 class="text-center text-2xl font-semibold font-sans text-gray-600">手机号注册</h2>
                <form class="mt-2 text-gray-900"
                      @submit.prevent="formSubmitHandle"
                      @keydown="form.errors.clear($event.target.name)"
                      @keyup="form.errors.clear($event.target.name)">
                    <div class="form-field mb-4">
                        <input type="text"
                               name="name"
                               placeholder="姓名"
                               class="h-10 w-full border border-gray-300 rounded px-3 py-1 hover:bg-white outline-none focus:border-gray-500 focus:bg-white focus:outline-none focus:shadow-lg"
                               v-model="form.name"
                               :class="{'bg-red-100 border-red-300 focus:border-red-300' : form.errors.has('name')}"
                        >
                        <div v-if="form.errors.has('name')"
                             v-text="form.errors.first('name')"
                             class="form-field-error -mb-4 text-left text-xs text-red-500 truncate"></div>
                    </div>
                    <div class="form-field mb-4">
                        <input type="text"
                               ref="phone"
                               name="phone"
                               placeholder="手机号码"
                               class="h-10 w-full border border-gray-300 rounded px-3 py-1 hover:bg-white outline-none focus:border-gray-500 focus:bg-white"
                               v-model="form.phone"
                               :class="{'bg-red-100 border-red-300 focus:border-red-300' : form.errors.has('phone') || verifyCodeForm.errors.has('phone')}">
                        <div v-if="form.errors.has('phone') || verifyCodeForm.errors.has('phone')"
                             v-text="form.errors.first('phone') || verifyCodeForm.errors.first('phone')"
                             class="form-field-error -mb-4 text-left text-xs text-red-500 truncate"></div>
                    </div>
                    <div class="form-field mb-4">
                        <div class="flex items-center justify-center items-center border border-gray-300">
                            <input type="text"
                                   name="verify_code"
                                   placeholder="验证码"
                                   class="h-10 w-1/2 rounded-l px-3 py-1 hover:bg-white outline-none focus:border-gray-500 focus:bg-white"
                                   v-model="form.verify_code"
                                   :class="{'bg-red-100 border-red-300 focus:border-red-300' : form.errors.has('verify_code')}"
                            >
                            <progress-button type="button"
                                             v-if="verifyCodeCanBeSend"
                                             :processing="verifyCodeIsProcessing"
                                             @click.native="verifyCodeSendHandle"
                                             class="cursor-pointer w-1/2 py-1 rounded-r underline focus:outline-none text-999 text-blue-600 text-center">获取验证码</progress-button>
                            <progress-button type="button"
                                             v-else
                                             class="w-1/2 py-1 rounded-r focus:outline-none cursor-not-allowed text-999 text-xs text-center">
                                <span v-text="verifyCodeTotalTimer"></span>秒后重新获取
                            </progress-button>
                        </div>
                        <div v-if="form.errors.has('verify_code')"
                             v-text="form.errors.first('verify_code')"
                             class="form-field-error -mb-4 text-left text-xs text-red-500 truncate"></div>
                    </div>
                    <div class="form-field mb-4">
                        <input type="text"
                               placeholder="邮箱"
                               v-model="form.email"
                               :class="{'bg-red-100 border-red-300 focus:border-red-300' : form.errors.has('email')}"
                               class="h-10 w-full border border-gray-300 rounded px-3 py-1 hover:bg-white outline-none focus:border-gray-500 focus:bg-white">
                        <div v-if="form.errors.has('email')"
                             v-text="form.errors.first('email')"
                             class="form-field-error -mb-4 text-left text-xs text-red-500 truncate"></div>
                    </div>

                    <div class="form-field mb-2">
                        <input type="text"
                               placeholder="交易账号"
                               v-model="form.extra.account"
                               :class="{'bg-red-100 border-red-300 focus:border-red-300' : form.errors.has('extra.account')}"
                               class="h-10 w-full border border-gray-300 rounded px-3 py-1 hover:bg-white outline-none focus:border-gray-500 focus:bg-white">
                        <div v-if="form.errors.has('extra.account')"
                             v-text="form.errors.first('extra.account')"
                             class="form-field-error -mb-4 text-left text-xs text-red-500 truncate"></div>
                    </div>

                    <div class="form-button pt-2">
                        <progress-button
                                type="submit"
                                :processing="isProcessing"
                                class="h-10 tracking-widest w-full text-white px-10 rounded py-1 bg-form-button bg-f89 focus:outline-none bg-green-500 hover:bg-green-400"
                        >提交</progress-button
                        >
                    </div>
                </form>
            </div>
        </validate-form-logic>
    </div>
</template>

<script>
    export default {
        methods: {
            verifyCodeSentSuccessful() {
                // 手机号验证成功
            },

            verifyCodeSentFail() {
                // 手机号验证失败
                this.$refs.phone.focus();
            },

            smsRegisterFail() {
                // 注册失败
            },

            smsRegisterSuccessful() {
                // 注册成功
            }
        }
    };
</script>
