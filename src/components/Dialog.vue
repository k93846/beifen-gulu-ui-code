<template>
    <!-- 已完成：为该页面添加样式 -->
    <!-- 已完成：为示例新建查看代码文本 -->
    <h1>Dialog组件示例</h1>
    <div class="demo">
        <h2>示例</h2>
        <div class="demo-component">
            <ButtonDetail @click="toogle">toogle</ButtonDetail>
            <DialogDetail v-model:visible="x" :closeOnClickOverlay="false" :ok="f1" :cancel="f2">
                <template v-slot:title>
                    <strong>提示</strong>
                </template>
                <template v-slot:content>
                    <div>hi</div>
                    <div>hi2</div>
                </template>
            </DialogDetail>
        </div>
        <div class="demo-actions">
            <!-- 使得点击后出现代码已完成 -->
            <ButtonDetail @click="seecode1">查看代码</ButtonDetail>
        </div>
        <div class="demo-code">
            <!-- 已完成：封装代码文本，使用字符串 -->
            <article class="markdown-body">
                <pre v-if="codeVisible1" v-text="DialogCode.a"></pre>
            </article>
        </div>
    </div>
</template>

<script>
import DialogDetail from '../lib/DialogDetail.vue';
import ButtonDetail from '../lib/ButtonDetail.vue';
import DialogCode from './code of how to use/DialogCode';
import { ref } from 'vue';
export default {
    components: {
        DialogDetail, ButtonDetail
    },
    setup() {
        const codeVisible1 = ref(false)
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
        const seecode1 = () => {
            codeVisible1.value = !codeVisible1.value
        }

        return { x, toogle, f1, f2, DialogCode, seecode1, codeVisible1 }
    }

}
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;

.demo {
    border: 1px solid $border-color;
    margin: 16px 0 32px;

    >h2 {
        font-size: 20px;
        padding: 8px 16px;
        border-bottom: 1px solid $border-color;
    }

    &-component {
        padding: 16px;
    }

    &-actions {
        padding: 8px 16px;
        border-top: 1px dashed $border-color;
    }

    &-code {
        padding: 8px 16px;
        border-top: 1px dashed $border-color;

        >pre {
            line-height: 1.1;
            font-family: Consolas, 'Courier New', Courier, monospace;
            margin: 0;
        }
    }
}
</style>