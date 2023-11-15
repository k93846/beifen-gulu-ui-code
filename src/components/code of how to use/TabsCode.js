const a =
`<template>
<Tabs v-model:selected=reselect>
<Tab title="导航1">内容1</Tab>
<Tab title="导航2">内容2</Tab>
</Tabs>
</template>

<script>
import { ref } from 'vue';
import Tab from '../lib/Tab.vue';
import Tabs from '../lib/Tabs.vue';
export default {
    inheritAttrs: false,
    components: { Tab, Tabs,Button },
    setup() {
        const reselect = ref('导航1')

        return { reselect }
    }
}
</script>`

export default{a}
