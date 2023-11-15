const a = 
`<Button @click="toogle">toogle</Button>
<Dialog v-model:visible="x" :closeOnClickOverlay="false" :ok="f1" :cancel="f2">
    <template v-slot:title>
        <strong>提示</strong>
    </template>
    <template v-slot:content>
        <div>hi</div>
        <div>hi2</div>
    </template>
</Dialog>

<script>
import Dialog from '../lib/Dialog.vue';
import Button from '../lib/Button.vue';
import { ref } from 'vue';
export default {
    components: {
        Dialog, Button
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