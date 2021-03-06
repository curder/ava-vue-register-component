<template>
  <div class="flex justify-center items-center flex-1">
    <validate-form-logic
      :request_type_id="type"
      :request_name="name"
      @verify-code-will-be-send="verifyCodeWillBeSendHandle"
      @verify-code-sent-successful="verifyCodeSentSuccessfulHandle"
      @verify-code-sent-fail="verifyCodeSentFailHandle"
      @register-will-be-send="registerWillBeSendHandle"
      @register-fail="registerFailHandle"
      @register-successful="registerSuccessfulHandle"
      ref="validateLogic"
    >
      <div
        class="p-8 border rounded bg-white"
        slot-scope="{ form, isProcessing, formSubmitHandle, verifyCodeSendHandle, verifyCodeForm, verifyCodeCanBeSend, verifyCodeTotalTimer, verifyCodeIsProcessing }"
        v-cloak
      >
        <h2 class="text-center text-2xl font-semibold font-sans text-gray-600">手机号注册</h2>
        <form
          class="mt-2 text-gray-900"
          @submit.prevent="formSubmitHandle"
          @keydown="form.errors.clear($event.target.name)"
          @keyup="form.errors.clear($event.target.name)"
        >
          <div class="form-field mb-4">
            <input
              type="text"
              name="name"
              class="h-10 w-full border border-gray-300 rounded px-3 py-1 hover:bg-white outline-none focus:border-gray-500 focus:bg-white focus:outline-none focus:shadow-lg"
              v-model="form.name"
              :class="{'bg-red-100 border-red-300 focus:border-red-300': form.errors.has('name')}"
              placeholder="姓名"
            />
            <div
              v-if="form.errors.has('name')"
              v-text="form.errors.first('name')"
              class="form-field-error -mb-4 text-left text-xs text-red-500 truncate"
            ></div>
          </div>
          <div class="form-field mb-4">
            <input
              type="text"
              ref="phone"
              name="phone"
              class="h-10 w-full border border-gray-300 rounded px-3 py-1 hover:bg-white outline-none focus:border-gray-500 focus:bg-white"
              v-model="form.phone"
              :class="{ 'bg-red-100 border-red-300 focus:border-red-300': form.errors.has('phone') || verifyCodeForm.errors.has('phone') }"
              placeholder="手机号码"
            />
            <div
              v-if="form.errors.has('phone') || verifyCodeForm.errors.has('phone')"
              v-text=" form.errors.first('phone') || verifyCodeForm.errors.first('phone')"
              class="form-field-error -mb-4 text-left text-xs text-red-500 truncate"
            ></div>
          </div>
          <div class="form-field mb-4">
            <div class="flex items-center justify-center items-center border border-gray-300">
              <input
                type="text"
                name="verify_code"
                class="h-10 w-1/2 rounded-l px-3 py-1 hover:bg-white outline-none focus:border-gray-500 focus:bg-white"
                v-model="form.verify_code"
                :class="{'bg-red-100 border-red-300 focus:border-red-300': form.errors.has('verify_code')}"
                placeholder="验证码"
              />
              <progress-button
                type="button"
                v-if="verifyCodeCanBeSend"
                :processing="verifyCodeIsProcessing"
                @click.native="verifyCodeSendHandle"
                class="cursor-pointer w-1/2 py-1 rounded-r underline focus:outline-none text-999 text-blue-600 text-center"
              >获取验证码</progress-button>
              <progress-button
                type="button"
                v-else
                class="w-1/2 py-1 rounded-r focus:outline-none cursor-not-allowed text-999 text-xs text-center"
              >
                <span v-text="verifyCodeTotalTimer"></span>秒后重新获取
              </progress-button>
            </div>
            <div
              v-if="form.errors.has('verify_code')"
              v-text="form.errors.first('verify_code')"
              class="form-field-error -mb-4 text-left text-xs text-red-500 truncate"
            ></div>
          </div>
          <div class="form-field mb-4">
            <input
              type="text"
              v-model="form.email"
              :class="{ 'bg-red-100 border-red-300 focus:border-red-300': form.errors.has('email')}"
              class="h-10 w-full border border-gray-300 rounded px-3 py-1 hover:bg-white outline-none focus:border-gray-500 focus:bg-white"
              placeholder="邮箱"
            />
            <div
              v-if="form.errors.has('email')"
              v-text="form.errors.first('email')"
              class="form-field-error -mb-4 text-left text-xs text-red-500 truncate"
            ></div>
          </div>

          <div class="form-field mb-2">
            <input
              type="text"
              v-model="form.extra.account"
              :class="{'bg-red-100 border-red-300 focus:border-red-300': form.errors.has('extra.account')}"
              class="h-10 w-full border border-gray-300 rounded px-3 py-1 hover:bg-white outline-none focus:border-gray-500 focus:bg-white"
              placeholder="交易账号"
            />
            <div
              v-if="form.errors.has('extra.account')"
              v-text="form.errors.first('extra.account')"
              class="form-field-error -mb-4 text-left text-xs text-red-500 truncate"
            ></div>
          </div>

          <div class="form-field mb-2">
            <select
              v-model="form.source"
              :class="{'bg-red-100 border-red-300 focus:border-red-300': form.errors.has('source')}"
              class="h-10 w-full border border-gray-300 rounded px-3 py-1 hover:bg-white outline-none focus:border-gray-500 focus:bg-white"
            >
              <option value>何种渠道了解爱华</option>
              <option
                v-for="(source, index) in sources"
                :key="index"
                value="source"
                v-text="source"
              ></option>
            </select>
            <div
              v-if="form.errors.has('source')"
              v-text="form.errors.first('source')"
              class="form-field-error -mb-4 text-left text-xs text-red-500 truncate"
            ></div>
          </div>

          <div class="form-button pt-2">
            <progress-button
              type="submit"
              class="h-10 tracking-widest w-full text-white px-10 rounded py-1 bg-form-button bg-f89 focus:outline-none bg-green-500 hover:bg-green-400"
              :processing="isProcessing"
            >提交</progress-button>
          </div>
        </form>
      </div>
    </validate-form-logic>
  </div>
</template>

<script>
import sources from "../../src/mixins/sources.js";

export default {
  mixins: [sources],
  data() {
    return {
      type: "v8gAomLh6w46",
      name: "测试"
    };
  },
  methods: {
    verifyCodeWillBeSendHandle({ form }) {
      // 发送验证码之前
      // console.log(form);
    },

    verifyCodeSentSuccessfulHandle() {
      // 手机号验证成功
    },

    verifyCodeSentFailHandle() {
      // 手机号验证失败
      this.$refs.phone.focus();
    },

    registerWillBeSendHandle({ form }) {
      // 表单注册之前
      // console.log(form);
    },

    registerFailHandle({ status, data }) {
      // 注册失败
      if (status === 422) {
        let { message, errors } = data;
        console.error(message);
        console.error(JSON.stringify(errors));
      }
    },

    registerSuccessfulHandle() {
      // 注册成功
    }
  }
};
</script>
