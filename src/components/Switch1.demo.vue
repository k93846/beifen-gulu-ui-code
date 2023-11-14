<template>
    <SwitchDetail v-model:value="bool" />
</template>

<script>
import { ref } from 'vue';
import SwitchDetail from '../lib/SwitchDetail.vue';
export default {
    components:{SwitchDetail},
    setup(){
        const bool = ref(false)       
        return{bool}
    }

}
</script>

<style lang="scss" scoped></style>