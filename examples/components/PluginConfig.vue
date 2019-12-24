<template>
  <div>
    <h3 class="mt-6 text-2xl font-semibold text-gray-700">插件配置</h3>

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
        <tr v-for="item in items">
          <td class="border px-4 py-2"><pre v-text="item.name"></pre></td>
          <td class="border px-4 py-2">
            <pre v-text="item.is_required"></pre>
          </td>
          <td class="border px-4 py-2">
            <pre v-text="item.default_value"></pre>
          </td>
          <td class="border px-4 py-2" v-text="item.description"></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          name: "domain",
          is_required: true,
          default_value: "https://register-api.avadev.cn",
          description: "自定义注册域名，需要根据项目，已经项目的运行环境配置"
        },
        {
          name: "signature",
          is_required: true,
          default_value: "avatrade",
          description:
            "自定义签名，需要根据项目实际情况配置，如果不清楚可以询问后台开发"
        },
        {
          name: "validateFormLogic",
          is_required: false,
          default_value: "validate-form-logic",
          description:
            "注册组件的自定义名称，如果与现有系统冲突可以使用自定义组件来避免"
        },
        {
          name: "progressButton",
          is_required: false,
          default_value: "progress-button",
          description:
            "状态按钮组件的自定义名称，如果与现有系统冲突可以使用自定义组件来避免"
        }
      ]
    };
  }
};
</script>
