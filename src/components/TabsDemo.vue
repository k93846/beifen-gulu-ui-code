<template>
    <!-- 已完成：为该页面添加样式 -->
    <!-- 已完成：为该页面添加代码文本 -->
    <!-- 已完成：优化所有的code.js内容 -->
    <h1>Tabs组件示例</h1>
    <div class="demo">
        <h2>示例</h2>
        <div class="demo-component">
            <Tabs v-model:selected=reselect>
                <Tab title="导航1">内容1</Tab>
                <Tab title="导航2">内容2</Tab>
            </Tabs>
        </div>
        <div class="demo-actions">
            <!-- 使得点击后出现代码已完成 -->
            <ButtonDetail @click="seecode1">查看代码</ButtonDetail>
        </div>
        <div class="demo-code">
            <!-- 已完成：封装代码文本，使用字符串 -->
            <article class="markdown-body">
                <pre v-if="codeVisible1" v-text="TabsCode.a"></pre>
            </article>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import Tab from '../lib/Tab.vue';
import Tabs from '../lib/Tabs.vue';
import ButtonDetail from '../lib/Button.vue';
import TabsCode from './code of how to use/TabsCode.js'
export default {
    inheritAttrs: false,
    components: { Tab, Tabs,ButtonDetail },
    setup() {
        const reselect = ref('导航1')
        const codeVisible1 = ref(false)
        const seecode1 = ()=>{
            codeVisible1.value = !codeVisible1.value
        }

        return { reselect,codeVisible1,seecode1,TabsCode }
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