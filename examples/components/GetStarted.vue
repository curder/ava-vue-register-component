<template>
    <div class="text-left mt-10">
        <PluginInstall />
        <PluginRegister />
        <PluginConfig />

        <ComponentConfig />
    </div>
</template>


<script>
    import PluginInstall from './PluginInstall.vue';
    import PluginRegister from './PluginRegister.vue';
    import PluginConfig from './PluginConfig.vue';
    import ComponentConfig from './ComponentConfig.vue';

    export default {
        components: {
            PluginInstall,
            PluginRegister,
            PluginConfig,
            ComponentConfig
        },
    }
</script>
