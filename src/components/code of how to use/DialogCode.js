const a = 
`<ButtonDetail @click="toogle">toogle</ButtonDetail>
<DialogDetail v-model:visible="x" :closeOnClickOverlay="false" :ok="f1" :cancel="f2">
    <template v-slot:title>
        <strong>提示</strong>
    </template>
    <template v-slot:content>
        <div>hi</div>
        <div>hi2</div>
    </template>
</DialogDetail>

<script>
import DialogDetail from '../lib/DialogDetail.vue';
import ButtonDetail from '../lib/ButtonDetail.vue';
import { ref } from 'vue';
export default {
    components: {
        DialogDetail, ButtonDetail
    },
    setup() {
        const x = ref(false)
        const toogle = () => {
            x.value = !x.value
        }
        const f1 = () => {
            return false
        }
        const f2 = () => {
            return
        }
        return { x, toogle, f1, f2 }
    }
}
</script>`

export default{a}