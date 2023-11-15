<template>
    <!-- 已完成：修复disabled无效问题，添加return -->
    <SwitchDetail v-model:value="bool" disabled/>
</template>

<script>
import { ref } from 'vue';
import SwitchDetail from '../lib/Switch.vue';
export default {
    components:{SwitchDetail},
    setup(){
        const bool = ref(false)
        return{bool}
    }

}
</script>

<style lang="scss" scoped></style>