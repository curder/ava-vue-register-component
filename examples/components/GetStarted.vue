<template>
    <div class="text-left mt-10">
        <h2 class="text-3xl">安装</h2>
        <div class="mt-2">
            <code>yarn add -D @curder/ava-vue-register-component</code>
        </div>

        <h3>注册插件</h3>
        <div class="mt-2">
            <code>import '@curder/ava-vue-register-component/dist/main.css'; // 加载css
                import avaVueRegisterComponent from '@curder/ava-vue-register-component';

                Vue.use(avaVueRegisterComponent, {
                        // ...
                });
            </code>
        </div>

        <h3>配置插件</h3>
        默认需要传递对应的参数给组件
    </div>
</template>

