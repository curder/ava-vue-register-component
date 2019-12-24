<script>
import Form from "form-backend-validation";

import { bus_events } from "../configs/events.js";

import smsRegisterMixin from "../mixins/index.js";

export default {
  mixins: [smsRegisterMixin],

  data() {
    return {
      form: new Form({
        name: "", // 用户名
        email: "", // 邮箱
        phone: null, // 手机号
        request_type_id: this.request_type_id, // 页面类型
        request_name: this.request_name, // 页面名称
        request_url: this.request_url, // 页面地址
        verify_code: "",
        extra: {} // 其他内容
      }),
      processing: false // 表单提交状态
    };
  },

  props: {
    method: {
      default: "post"
    },

    request_type_id: {
      type: [Number, String],
      required: true
    },

    request_name: {
      type: String,
      required: true
    },

    request_url: {
      type: String,
      default: window.location.href
    },

    extra: {
      type: Object,
      required: false
    },

    is_email: {
      type: Boolean,
      default: false
    },
    email_required: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    formSubmitAction() {
      return this.is_email
        ? this.$ava.register.email_register_url
        : this.$ava.register.sms_register_url;
    }
  },

  methods: {
    async onSubmit() {
      this.processing = true;

      if (!this.email_required && !this.form.email) {
        // 邮箱必须填且不为空的时候传递给后端
        delete this.form.email;
      }

      try {
        const response = await this.form[this.method](this.formSubmitAction);
        this.processing = false;
        this.$emit(bus_events.register_successful, response);
      } catch (error) {
        this.processing = false;
        if (error.response.status === 422) {
          this.$emit(bus_events.register_fail, error.response);
        }
      }
    }
  },
  watch: {
    extra(value) {
      // 表单额外的数据
      this.form.extra = value;
    },

    request_type_id(value) {
      // 表单类型ID值，需要后端程序提供
      let data = { request_type_id: value };
      this.form.populate(data);
      this.verifyCodeForm.populate(data);
    }
  },
  render() {
    return this.$scopedSlots.default({
      form: this.form, // 表单
      verifyCodeForm: this.verifyCodeForm, // 验证码表单

      formSubmitHandle: this.onSubmit, // 处理表单提交
      verifyCodeSendHandle: this.verifyCodeSendHandle, // 表单验证码发送处理

      verifyCodeCanBeSend: this.verifyCodeCanBeSend, // 是否允许发送验证码
      verifyCodeTotalTimer: this.verifyCodeTotalTimer, // 发送验证码倒计时

      isProcessing: this.processing, // 表单是否处理中，默认 false
      verifyCodeIsProcessing: this.verifyCodeIsProcessing // 验证码是否处理中，默认 false
    });
  }
};
</script>
