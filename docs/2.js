(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{116:function(t,e,s){"use strict";s.r(e);var r=s(2),i={data:function(){return{items:[{name:"domain",is_required:!0,default_value:"https://register-api.avadev.cn",description:"自定义注册域名，需要根据项目，已经项目的运行环境配置"},{name:"signature",is_required:!0,default_value:"avatrade",description:"自定义签名，需要根据项目实际情况配置，如果不清楚可以询问后台开发"},{name:"validateFormLogic",is_required:!1,default_value:"validate-form-logic",description:"注册组件的自定义名称，如果与现有系统冲突可以使用自定义组件来避免"},{name:"progressButton",is_required:!1,default_value:"progress-button",description:"状态按钮组件的自定义名称，如果与现有系统冲突可以使用自定义组件来避免"}]}}},a={data:function(){return{propItems:[{name:"request_type_id",is_required:!0,default_value:"NULL",description:"从后台获得请求类型ID，每次新增一个页面表单组件需要在后台根据需求创建对应的表单类型，然后使用组件的时候将对应的值传入组件使用"},{name:"request_name",is_required:!0,default_value:"NULL",description:"请求名称，可以是页面的名称，通俗易懂即可"},{name:"is_email",is_required:!1,default_value:"false",description:"如果表单类型是邮箱注册，则传值<pre>is_email</pre>属性，<strong>如果是手机注册类型则不需要传这个属性</strong>"},{name:"email_required",is_required:!1,default_value:"false",description:"如果表单的邮箱是必填项，则传值<pre>email_required</pre>属性"},{name:"request_url",is_required:!1,default_value:"NULL",description:"请求地址，如果不填默认获取当前组件所在页面地址"}],slotItems:[{name:"form",type:"Object",description:"可以通过<strong>form</strong>释放出对应的属性和方法，比如 <pre>form.name用户名</pre> <pre>form.email邮箱</pre> <pre>form.phone手机号</pre> <pre>form.verify_code验证码</pre> <pre>form.extra.account交易账号</pre> <pre>form.extra.source来源渠道</pre>等字段，以及一些表单在提交到后台验证的时候错误提示，通过<pre>form.errors.has('字段名')</pre>判断是否存在错误，<pre>form.errors.first('字段名')</pre>获取对应字段的第一个错误内容，<pre>form.errors.clear($event.target.name)</pre>清空表单错误"},{name:"isProcessing",type:"Boolean",description:"表单是否正在提交，一般用来做表单提交按钮的状态展现"},{name:"formSubmitHandle",type:"Function",description:'<strong>固定写法</strong> 绑定在表单Form的<pre>@submit="formSubmitHandle"</pre>处'},{name:"verifyCodeForm",type:"Object",description:"可用通过<strong>verifyCodeForm</strong>释放处对应的属性和方法，比如：<pre>verifyCodeForm.errors.has('phone')</pre> <pre>verifyCodeForm.errors.first('phone')</pre>，且必须是有发送验证码逻辑才有个方法"},{name:"verifyCodeSendHandle",type:"Function",description:'<strong>固定写法</strong> 绑定在发送验证码按钮<pre>@click.native="verifyCodeSendHandle"</pre>处，且必须是有发送验证码逻辑才有个方法'},{name:"verifyCodeCanBeSend",type:"Boolean",description:'<strong>固定写法</strong> 绑定在发送验证码按钮<pre>v-if="verifyCodeCanBeSend"</pre>处，用于标示是否是在处理验证码发送逻辑，且必须是有发送验证码逻辑才有个方法'},{name:"verifyCodeTotalTimer",type:"Number",description:"<strong>固定写法</strong> 绑定在发送验证码按钮<pre>{{ verifyCodeTotalTimer }}</pre>处，用于标示发送验证码的倒计时，且必须是有发送验证码逻辑才有个方法"},{name:"verifyCodeIsProcessing",type:"Boolean",description:'<strong>固定写法</strong> 绑定在发送验证码按钮<pre>:processing="verifyCodeIsProcessing"</pre>处，用于标示验证码发送状态的切换，且必须是有发送验证码逻辑才有个方法'}],callbackItems:[{name:"@register-fail",description:"表单注册失败后的回调，比如弹出提示层"},{name:"@register-successful",description:"表单注册成功后的回调，比如添加页面跳转，添加下载操作"},{name:"@verify-code-sent-successful",description:"手机验证码发送成功后执行的回调函数 <strong>在组件属性<pre>is_email</pre>不存在的时候会存在</strong>"},{name:"@verify-code-sent-fail",description:"手机验证码发送<strong>失败后</strong>执行的回调函数 <strong>在组件属性<pre>is_email</pre>不存在的时候会存在</strong>"}]}}},n={components:{PluginInstall:Object(r.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h2",{staticClass:"text-3xl font-semibold text-gray-700"},[this._v("安装")]),this._v(" "),e("div",{staticClass:"mt-2"},[e("code",[this._v("yarn add -D @curder/ava-vue-register-component")])])])}],!1,null,null,null).exports,PluginRegister:Object(r.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h3",{staticClass:"mt-6 text-2xl font-semibold text-gray-700"},[this._v("注册插件")]),this._v(" "),e("div",{staticClass:"mt-2"},[e("code",[this._v("import '@curder/ava-vue-register-component/dist/main.css'; // 加载css\n            import avaVueRegisterComponent from '@curder/ava-vue-register-component';\n\n            Vue.use(avaVueRegisterComponent, {\n            // validateFormLogic: 'validate-form-logic', // 注册逻辑组件\n            // progressButton: 'progress-button', // 执行中状态按钮\n\n            domain: 'https://register-api.avgpro.cn.test', // 自定义注册域名\n            signature: 'avatrade', // 短信签名\n            })\n        ")])])])}],!1,null,null,null).exports,PluginConfig:Object(r.a)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h3",{staticClass:"mt-6 text-2xl font-semibold text-gray-700"},[t._v("插件配置")]),t._v(" "),s("table",{staticClass:"table-auto"},[t._m(0),t._v(" "),s("tbody",t._l(t.items,(function(e){return s("tr",[s("td",{staticClass:"border px-4 py-2"},[s("pre",{domProps:{textContent:t._s(e.name)}})]),t._v(" "),s("td",{staticClass:"border px-4 py-2"},[s("pre",{domProps:{textContent:t._s(e.is_required)}})]),t._v(" "),s("td",{staticClass:"border px-4 py-2"},[s("pre",{domProps:{textContent:t._s(e.default_value)}})]),t._v(" "),s("td",{staticClass:"border px-4 py-2",domProps:{textContent:t._s(e.description)}})])})),0)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",{staticClass:"px-4 py-2"},[this._v("属性名称")]),this._v(" "),e("th",{staticClass:"px-4 py-2"},[this._v("是否必填")]),this._v(" "),e("th",{staticClass:"px-4 py-2"},[this._v("默认值")]),this._v(" "),e("th",{staticClass:"px-4 py-2"},[this._v("说明")])])])}],!1,null,null,null).exports,ComponentConfig:Object(r.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container mx-auto"},[s("h3",{staticClass:"mt-6 text-2xl font-semibold text-gray-700"},[t._v("组件配置")]),t._v(" "),t._m(0),t._v(" "),s("div",{staticClass:"mt-2 px-4"},[s("div",{staticClass:"mt-2 text-xl font-bold"},[t._v("属性")]),t._v(" "),s("table",{staticClass:"w-full table-auto"},[t._m(1),t._v(" "),s("tbody",t._l(t.propItems,(function(e){return s("tr",[s("td",{staticClass:"border px-4 py-2"},[s("pre",{domProps:{textContent:t._s(e.name)}})]),t._v(" "),s("td",{staticClass:"border px-4 py-2"},[s("pre",{domProps:{textContent:t._s(e.is_required)}})]),t._v(" "),s("td",{staticClass:"border px-4 py-2"},[s("pre",{domProps:{textContent:t._s(e.default_value)}})]),t._v(" "),s("td",{staticClass:"border px-4 py-2",domProps:{innerHTML:t._s(e.description)}})])})),0)])]),t._v(" "),s("div",{staticClass:"mt-2 px-4"},[s("div",{staticClass:"mt-2 text-xl font-bold"},[t._v("方法")]),t._v(" "),s("table",{staticClass:"w-full table-auto"},[t._m(2),t._v(" "),s("tbody",t._l(t.callbackItems,(function(e){return s("tr",[s("td",{staticClass:"border px-4 py-2"},[s("pre",{domProps:{textContent:t._s(e.name)}})]),t._v(" "),s("td",{staticClass:"border px-4 py-2",domProps:{innerHTML:t._s(e.description)}})])})),0)])]),t._v(" "),s("div",{staticClass:"mt-2 px-4"},[s("div",{staticClass:"mt-2 text-xl font-bold"},[t._v("插槽")]),t._v(" "),s("table",{staticClass:"w-full table-auto"},[t._m(3),t._v(" "),s("tbody",t._l(t.slotItems,(function(e){return s("tr",[s("td",{staticClass:"border px-4 py-2"},[s("pre",{domProps:{textContent:t._s(e.name)}})]),t._v(" "),s("td",{staticClass:"border px-4 py-2"},[s("pre",{domProps:{textContent:t._s(e.type)}})]),t._v(" "),s("td",{staticClass:"border px-4 py-2 text-sm",domProps:{innerHTML:t._s(e.description)}})])})),0)])]),t._v(" "),t._m(4),t._v(" "),t._m(5)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mt-4 font-bold"},[e("pre",[this._v("validate-form-logic")]),this._v("组件\n  ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",{staticClass:"px-4 py-2"},[this._v("属性名称")]),this._v(" "),e("th",{staticClass:"px-4 py-2"},[this._v("是否必填")]),this._v(" "),e("th",{staticClass:"px-4 py-2"},[this._v("默认值")]),this._v(" "),e("th",{staticClass:"px-4 py-2"},[this._v("说明")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",{staticClass:"px-4 py-2"},[this._v("方法名称")]),this._v(" "),e("th",{staticClass:"px-4 py-2"},[this._v("说明")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",{staticClass:"px-4 py-2"},[this._v("名称")]),this._v(" "),e("th",{staticClass:"px-4 py-2"},[this._v("类型")]),this._v(" "),e("th",{staticClass:"px-4 py-2"},[this._v("说明")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mt-4 font-bold"},[e("pre",[this._v("progress-button")]),this._v("组件\n  ")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",{staticClass:"w-full table-auto"},[s("thead",[s("tr",[s("th",{staticClass:"px-4 py-2"},[t._v("属性名称")]),t._v(" "),s("th",{staticClass:"px-4 py-2"},[t._v("是否必填")]),t._v(" "),s("th",{staticClass:"px-4 py-2"},[t._v("默认值")]),t._v(" "),s("th",{staticClass:"px-4 py-2"},[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticClass:"border px-4 py-2"},[s("pre",[t._v("processing")])]),t._v(" "),s("td",{staticClass:"border px-4 py-2"},[s("pre",[t._v("false")])]),t._v(" "),s("td",{staticClass:"border px-4 py-2"},[s("pre",[t._v("false")])]),t._v(" "),s("td",{staticClass:"border px-4 py-2"},[t._v("通过这个属性可以控制按钮的状态，一般使用它来提示用户对表单的操作反馈")])])])])}],!1,null,null,null).exports}},o={components:{GetStarted:Object(r.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text-left mt-10"},[e("PluginInstall"),this._v(" "),e("PluginRegister"),this._v(" "),e("PluginConfig"),this._v(" "),e("ComponentConfig")],1)}),[],!1,null,null,null).exports}},l=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex justify-center items-center"},[e("div",{staticClass:"text-center"},[e("h1",{staticClass:"text-5xl text-gray-600 font-semibold"},[this._v("Ava Vue Register Component")]),this._v(" "),e("p",{staticClass:"text-3xl text-gray-300 tracking-wider font-semibold"},[this._v("Local Register Component for ava websites.")]),this._v(" "),e("GetStarted")],1)])}),[],!1,null,null,null);e.default=l.exports}}]);