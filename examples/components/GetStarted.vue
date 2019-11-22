<template>
    <div class="text-left mt-10">
        <h2 class="text-3xl">安装</h2>
        <div class="mt-2">
            <code>yarn add -D @curder/ava-vue-register-component</code>
        </div>
        <p class="mt-2 block">Or</p>
        <div class="mt-2">
            <code>npm install --save-dev @curder/ava-vue-register-component</code>
        </div>

        <h3>注册插件</h3>
        <div class="mt-2">
            <code>import '@curder/ava-vue-register-component/dist/main.css'; // 加载css
                import Plugin from '@curder/ava-vue-register-component';
                Vue.use(Plugin);
            </code>
        </div>
    </div>
</template>

