const a =
`<template>
    <SwitchDetail v-model:value="bool" disabled />
</template>
<script>
import { ref } from 'vue'; 
import SwitchDetail from '../lib/SwitchDetail.vue'; 
export default {
    components: { SwitchDetail }, 
    setup() {
        const bool = ref(false)
        return { bool }
    }
}
</script>`
export default{a}

