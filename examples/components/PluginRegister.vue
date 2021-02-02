<template>
    <div>
        <h3 class="mt-6 text-2xl font-semibold text-gray-700">注册插件</h3>
        <div class="mt-2">
            <code>import '@curder/ava-vue-register-component/dist/main.css'; // 加载css
                import avaVueRegisterComponent from '@curder/ava-vue-register-component';

                Vue.use(avaVueRegisterComponent, {
                    // validateFormLogic: 'validate-form-logic', // 注册逻辑组件
                    // progressButton: 'progress-button', // 执行中状态按钮

                    domain: 'https://register-api.avgpro.cn.test', // 自定义注册域名
                    signature: 'avatrade', // 短信签名
                    // prefix: `api/v1`, // 请求地址前缀
                    // verify_code_path: `registers/by-sms/send-code`, // 发送手机验证码地址
                    // sms_register_path: `registers/by-sms`, // 手机号注册
                    // email_register_path: `registers/by-email`, // 邮箱注册
                })
            </code>
        </div>
    </div>
</template>
