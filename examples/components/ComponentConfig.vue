<template>
    <div>
        <h3 class="mt-6 text-2xl font-semibold text-gray-700">组件配置</h3>

        <div class="mt-4 font-bold">
            <pre>validate-form-logic</pre>
            组件
        </div>

        <div class="mt-2 px-4">
            <div class="mt-2 text-xl font-bold">组件属性</div>

            <table class="table-auto">
                <thead>
                <tr>
                    <th class="px-4 py-2">属性名称</th>
                    <th class="px-4 py-2">是否必填</th>
                    <th class="px-4 py-2">默认值</th>
                    <th class="px-4 py-2">说明</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="item in propItems">
                    <td class="border px-4 py-2">
                        <pre v-text="item.name"></pre>
                    </td>
                    <td class="border px-4 py-2">
                        <pre v-text="item.is_required"></pre>
                    </td>
                    <td class="border px-4 py-2">
                        <pre v-text="item.default_value"></pre>
                    </td>
                    <td class="border px-4 py-2" v-html="item.description"></td>
                </tr>
                </tbody>
            </table>
        </div>

        <div class="mt-2 px-4">
            <div class="mt-2 text-xl font-bold">组件方法</div>

            <table class="table-auto">
                <thead>
                <tr>
                    <th class="px-4 py-2">方法名称</th>
                    <th class="px-4 py-2">说明</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="item in callbackItems">
                    <td class="border px-4 py-2">
                        <pre v-text="item.name"></pre>
                    </td>
                    <td class="border px-4 py-2" v-html="item.description"></td>
                </tr>
                </tbody>
            </table>
        </div>

        <div class="mt-4 font-bold">
            <pre>progress-button</pre>
            组件
        </div>


        <table class="table-auto">
            <thead>
            <tr>
                <th class="px-4 py-2">属性名称</th>
                <th class="px-4 py-2">是否必填</th>
                <th class="px-4 py-2">默认值</th>
                <th class="px-4 py-2">说明</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td class="border px-4 py-2"><pre>processing</pre></td>
                <td class="border px-4 py-2"><pre>false</pre></td>
                <td class="border px-4 py-2"><pre>false</pre></td>
                <td class="border px-4 py-2">通过这个属性可以控制按钮的状态，一般使用它来提示用户对表单的操作反馈</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                propItems: [
                    {
                        name: 'request_type_id',
                        is_required: true,
                        default_value: 'NULL',
                        description: '从后台获得请求类型ID，每次新增一个页面表单组件需要在后台根据需求创建对应的表单类型，然后使用组件的时候将对应的值传入组件使用'
                    },
                    {
                        name: 'request_name',
                        is_required: true,
                        default_value: 'NULL',
                        description: '请求名称，可以是页面的名称，通俗易懂即可'
                    },
                    {
                        name: 'is_email',
                        is_required: true,
                        default_value: 'NULL',
                        description: '如果表单类型是邮箱注册，则传值<pre>is_email</pre>属性，<strong>如果是手机注册类型则不需要传这个属性</strong>'
                    },
                    {
                        name: 'request_url',
                        is_required: false,
                        default_value: 'NULL',
                        description: '请求地址，如果不填默认获取当前组件所在页面地址'
                    },
                    {
                        name: 'extra',
                        is_required: false,
                        default_value: 'NULL',
                        description: '其他表单参数，比如：交易账号 <pre>extra.account</pre>，渠道来源数据 <pre>extra.source</pre>'
                    },
                ],

                callbackItems: [
                    {name: '@register-fail', description: '表单注册失败后的回调，比如弹出提示层'},
                    {name: '@register-successful', description: '表单注册成功后的回调，比如添加页面跳转，添加下载操作'},
                    {
                        name: '@verify-code-sent-successful',
                        description: '手机验证码发送成功后执行的回调函数 <strong>在组件属性<pre>is_email</pre>不存在的时候会存在</strong>'
                    },
                    {
                        name: '@verify-code-sent-fail',
                        description: '手机验证码发送<strong>失败后</strong>z执行的回调函数 <strong>在组件属性<pre>is_email</pre>不存在的时候会存在</strong>'
                    },
                ],
            }
        }
    }
</script>
