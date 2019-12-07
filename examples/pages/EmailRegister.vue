<template>
    <div class="flex justify-center items-center flex-1">
        <validate-form-logic :request_type_id="type"
                      :request_name="name"
                      is_email
                      @register-fail="registerFailHandle"
                      @register-successful="registerSuccessfulHandle">
            <div class="p-8 border rounded bg-white" slot-scope="{ form, isProcessing, formSubmitHandle }" v-cloak>

                <h2 class="text-center text-2xl font-semibold font-sans text-gray-600">邮箱注册</h2>
                <form class="mt-2 text-gray-900"
                      style="min-width: 260px;"
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
                               :class="{'bg-red-100 border-red-300 focus:border-red-300' : form.errors.has('phone')}">
                        <div v-if="form.errors.has('phone')"
                             v-text="form.errors.first('phone')"
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
                             class="form-field-error -mb-4 text-left text-xs text-red-500 truncate"
                        ></div>
                    </div>

                    <div class="form-field mb-2">
                        <input type="text"
                               placeholder="交易账号"
                               v-model="form.extra.account"
                               :class="{'bg-red-100 border-red-300 focus:border-red-300' : form.errors.has('extra.account')}"
                               class="h-10 w-full border border-gray-300 rounded px-3 py-1 hover:bg-white outline-none focus:border-gray-500 focus:bg-white">
                        <div v-if="form.errors.has('extra.account')"
                             v-text="form.errors.first('extra.account')"
                             class="form-field-error -mb-4 text-left text-xs text-red-500 truncate"
                        ></div>
                    </div>

                    <div class="form-button pt-2">
                        <progress-button type="submit"
                                         :processing="isProcessing"
                                         class="h-10 tracking-widest w-full text-white px-10 rounded py-1 bg-form-button bg-f89 focus:outline-none bg-green-500 hover:bg-green-400">提交</progress-button>
                    </div>
                </form>

            </div>
        </validate-form-logic>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                type: 'Cqa7zwav3ENN1',
                name: '测试',
            };
        },
        methods: {
            registerFailHandle({status, data}) { // 注册失败
                if(status === 422) {
                    let {message, errors} = data;
                    console.error(message);
                    console.error(JSON.stringify(errors));
                }
            },

            registerSuccessfulHandle() { // 注册成功

            },
        }
    }
</script>
