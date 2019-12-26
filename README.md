## 安装

```
yarn add -D @curder/ava-vue-register-component
```

### 注册插件

```
import '@curder/ava-vue-register-component/dist/main.css'; // 加载css
import avaVueRegisterComponent from '@curder/ava-vue-register-component';

Vue.use(avaVueRegisterComponent, {
    // validateFormLogic: 'validate-form-logic', // 注册逻辑组件
    // progressButton: 'progress-button', // 执行中状态按钮

    domain: 'https://register-api.avgpro.cn.test', // 自定义注册域名
    signature: 'avatrade', // 短信签名
});
```

### 插件配置

| 属性名称            | 是否必填 | 默认值                           | 说明                                                                 |
| ------------------- | -------- | -------------------------------- | -------------------------------------------------------------------- |
| `domain`            | `true`   | `https://register-api.avadev.cn` | 自定义注册域名，需要根据项目，已经项目的运行环境配置                 |
| `signature`         | `true`   | `avatrade`                       | 自定义签名，需要根据项目实际情况配置，如果不清楚可以询问后台开发     |
| `validateFormLogic` | `false`  | `validate-form-logic`            | 注册组件的自定义名称，如果与现有系统冲突可以使用自定义组件来避免     |
| `progressButton`    | `false`  | `progress-button`                | 状态按钮组件的自定义名称，如果与现有系统冲突可以使用自定义组件来避免 |

### 组件配置

#### `validate-form-logic` 组件

- 属性

| 属性名称          | 是否必填 | 默认值  | 说明                                                                                                                         |
| ----------------- | -------- | ------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `request_type_id` | `true`   | `NULL`  | 从后台获得请求类型ID，每次新增一个页面表单组件需要在后台根据需求创建对应的表单类型，然后使用组件的时候将对应的值传入组件使用 |
| `request_name`    | `true`   | `NULL`  | 请求名称，可以是页面的名称，通俗易懂即可                                                                                     |
| `is_email`        | `false`  | `false` | 如果表单类型是邮箱注册，则传值 `is_email` 属性，**如果是手机注册类型则不需要传这个属性**                                     |
| `email_required`  | `false`  | `NULL`  | 如果表单的邮箱是必填项，则传值 `email_required` 属性                                                                         |
| `request_url`     | `false`  | `''`    | 请求地址，如果不填默认获取当前组件所在页面地址                                                                               |

- 方法

| 方法名称                       | 说明                                                                             |
| ------------------------------ | -------------------------------------------------------------------------------- |
| `@verify-code-will-be-send`    | 手机验证码发送之前执行的回调函数  **在组件属性 `is_email` 不存在的时候会存在**   |
| `@verify-code-sent-successful` | 手机验证码发送成功后执行的回调函数 **在组件属性 `is_email` 不存在的时候会存在**  |
| `@verify-code-sent-fail`       | 手机验证码发送失败后z执行的回调函数 **在组件属性 `is_email` 不存在的时候会存在** |
| `@register-will-be-send`       | 表单注册提交之前的回调，比如需要将数据进行处理                                   |
| `@register-fail`               | 表单注册失败后的回调，比如弹出提示层                                             |
| `@register-successful`         | 表单注册成功后的回调，比如添加页面跳转，添加下载操作                             |

- 插槽

| 名称                     | 类型       | 说明                                                                                                                                                                                                                                                                                                                                                                                                 |
| ------------------------ | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `form`                   | `Object`   | 可以通过form释放出对应的属性和方法，比如 `form.name 用户名` `form.email邮箱` `form.phone手机号` `form.verify_code验证码` `form.extra.account交易账号` `form.extra.source来源渠道`等字段，以及一些表单在提交到后台验证的时候错误提示，通过`form.errors.has('字段名')`判断是否存在错误，`form.errors.first('字段名')`获取对应字段的第一个错误内容，`form.errors.clear($event.target.name)`清空表单错误 |
| `formSubmitHandle`       | `Function` | **固定写法** 绑定在表单Form的`@submit="formSubmitHandle"`处                                                                                                                                                                                                                                                                                                                                          |
| `verifyCodeForm`         | `Object`   | 可用通过**verifyCodeForm**释放处对应的属性和方法，比如：`verifyCodeForm.errors.has('phone')` `verifyCodeForm.errors.first('phone')`，且必须是有发送验证码逻辑才有个方法                                                                                                                                                                                                                              |
| `verifyCodeSendHandle`   | `Function` | **固定写法** 绑定在发送验证码按钮`@click.native="verifyCodeSendHandle"`处，且必须是有发送验证码逻辑才有个方法                                                                                                                                                                                                                                                                                        |
| `verifyCodeCanBeSend`    | `Boolean`  | **固定写法** 绑定在发送验证码按钮`v-if="verifyCodeCanBeSend"`处，用于标示是否是在处理验证码发送逻辑，且必须是有发送验证码逻辑才有个方法                                                                                                                                                                                                                                                              |
| `verifyCodeTotalTimer`   | `Number`   | **固定写法** 绑定在发送验证码按钮`{{ verifyCodeTotalTimer }}`处，用于标示发送验证码的倒计时，且必须是有发送验证码逻辑才有个方法                                                                                                                                                                                                                                                                      |
| `verifyCodeIsProcessing` | `Boolean`  | **固定写法** 绑定在发送验证码按钮`:processing="verifyCodeIsProcessing"`处，用于标示验证码发送状态的切换，且必须是有发送验证码逻辑才有个方法                                                                                                                                                                                                                                                          |



