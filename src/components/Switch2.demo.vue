<template>
    <!-- 已完成：修复disabled无效问题，添加return -->
    <Switch v-model:value="bool" disabled/>
</template>

<script>
import { ref } from 'vue';
import Switch from '../lib/Switch.vue';
export default {
    components:{Switch},
    setup(){
        const bool = ref(false)
        return{bool}
    }

}
</script>

<style lang="scss" scoped></style>